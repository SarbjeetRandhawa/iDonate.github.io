function removehref() {
    localStorage.setItem('loggedIn', false);
    window.location.href = 'loginuser.html';


}
window.addEventListener('load', function () {
    const links = document.querySelectorAll('a');

    if (localStorage.getItem('loggedIn') === 'true') {
        links.forEach(function (link) {
            const href = link.getAttribute('href');


            if (href.includes('loginuser.html')) {
                link.setAttribute('href', href.replace('loginuser.html', 'donerform.html'));
            }
            const userdis = localStorage.getItem('userdis');

            document.getElementById("userdis1").innerHTML = userdis;
        });
    } else {
        links.forEach(function (link) {
            const href = link.getAttribute('href');

            if (href.includes('donerform.html')) {
                link.setAttribute('href', href.replace('donerform.html', 'loginuser.html'));
            }
            const userdis = localStorage.getItem('userdis');

            document.getElementById("userdis1").innerHTML = "";
        })
    }
}
);


const donorform = document.querySelector('#donorform');


donorform.addEventListener('submit', (e) => {
    e.preventDefault();
    const dname = document.querySelector('#dname').value;
    const demail = document.querySelector('#demail').value;
    const daddress = document.querySelector('#daddress').value;
    const mhistory = document.querySelector('#mhistory').value;
    const bgroup = document.querySelector('#bgroup').value;
    const contact = document.querySelector('#contact').value;
    const sex = document.querySelector('#sex').value;
    const age = document.querySelector('#age').value;


    const donorData = {dname,demail,daddress,mhistory,bgroup,contact,sex,age};
    let donorArray = JSON.parse(localStorage.getItem('donorDataArray')) || [];
    donorArray.push(donorData);
    localStorage.setItem('donorDataArray', JSON.stringify(donorArray));
    //  console.log(donorArray);

    swal({
        icon: 'success',
        title: 'Success!',
        text: 'Your form data has been submitted successfully.',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'blodddisplay.html';
    });
})