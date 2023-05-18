function removehref() {
    localStorage.setItem('loggedIn', false);
    window.location.href = 'loginuser.html';


}

function validation() {
    if (document.donorform.number.value.length > 10) {
        document.getElementById("result").innerHTML = "Contact number is too long";
        return false;
    } else if (document.donorform.name.value == "") {
        document.getElementById("result").innerHTML = "Name required";
        return false;
    } else if (document.donorform.Bloodgroup.value == "") {
        document.getElementById("result").innerHTML = "Blood-group required";
        return false;
    } else if (document.donorform.address.value == "") {
        document.getElementById("result").innerHTML = "address required";
        return false;
    } else if (document.donorform.email.value == "") {
        document.getElementById("result").innerHTML = "email required";
        return false;
    } else if (document.donorform.number.value.length > 10) {
        document.getElementById("result").innerHTML = "Contact number is too long";
        return false;
    } else if (document.donorform.age.value == "") {
        document.getElementById("result").innerHTML = "age required";
        return false;
    } else if (document.donorform.sex.value == "Sex") {
        document.getElementById("result").innerHTML = "Gender required";
        return false;
    } else if (document.donorform.number.value == "") {
        document.getElementById("result").innerHTML = "Nnumber required";
        return false;
    } else if (document.donorform.medical.value == "") {
        document.getElementById("result").innerHTML = "medical history required";
        return false;
    } else if (document.donorform.number.value.length < 5) {
        document.getElementById("result").innerHTML = "Contact number is too short";
        return false;
    } else {

        const donorform = document.querySelector('#donorform');



        const dname = document.querySelector('#dname').value;
        const demail = document.querySelector('#demail').value;
        const daddress = document.querySelector('#daddress').value;
        const mhistory = document.querySelector('#mhistory').value;
        const bgroup = document.querySelector('#bgroup').value;
        const contact = document.querySelector('#contact').value;
        const sex = document.querySelector('.sex').value;
        const age = document.querySelector('#age').value;


        const donorData = { dname, demail, daddress, mhistory, bgroup, contact, sex, age };
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
        return false;
    }

}
const loader = document.querySelector('.content');

function myfunction() {
    loader.style.display = "none";
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

