// const formDataDiv = document.querySelector('#databox');

// const formArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

// if (formArray.length > 0) {
//     displayFormData(formArray);
// }


// function displayFormData(formArray) {
//     formDataDiv.innerHTML = '';
//     formArray.forEach(formData => {
//         // console.log(i);
//         formDataDiv.innerHTML += `<div id="detailbox">

//         <p class="bbnamee"><span id="bold">Blood Bank Name:</span>  ${formData.bbname}</p>
//         <p class="bbstate"><span id="bold">State:</span> ${formData.state}</p>
//         <p class="bbdistrict"><span id="bold">District:</span> ${formData.district}</p>
//         <p class="bbcity"><span id="bold">City:</span> ${formData.city}</p>
//         <button id="show"> -></button>
//         <div id="blurbox" class="hidden">
//             <div id="heading"><button id="backk"></button><p class="bbnamee"><span id="bold">Blood Bank Name:</span>  ${formData.bbname}</p></div>
//             <div id="wholedetail"></div>
//            </div>
//       </div>

//     `;
//     const showbtn =document.querySelector('#show')
//     const  blurboxx=document.querySelector('#blurbox')
//     const  backtodata=document.querySelector('#backk')

//     showoption1 = function () {
//         blurboxx.classList.remove("hidden");
//     }
//     hideoption1 = function () {
//         blurboxx.classList.add("hidden");
//     }
//     showbtn.onclick = showoption1;
//     backtodata.onclick = hideoption1;



//     });
// }

const loader = document.querySelector('.content');

function myfunction() {
  loader.style.display = "none";
}

const formArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
// const formArray2 = JSON.parse(localStorage.getItem('checkedCheckboxesarray')) || [];
const checkedCheckboxes = JSON.parse(localStorage.getItem('checkedCheckboxes'));
const checkedCheckboxes2 = JSON.parse(localStorage.getItem('checkedCheckboxes2'));
const checkedCheckboxes3 = JSON.parse(localStorage.getItem('checkedCheckboxes3'));
const checkedCheckboxes4 = JSON.parse(localStorage.getItem('checkedCheckboxes4'));
const checkedCheckboxes5 = JSON.parse(localStorage.getItem('checkedCheckboxes5'));
const donorArray = JSON.parse(localStorage.getItem('donorDataArray')) || [];





const formdatadiv = document.querySelector('#databox');

const databoxshow = document.querySelector("#databoxshow")
const donorboxshow = document.querySelector("#donorboxshow")
const databoxdiv = document.querySelector("#databox")
const donorboxdiv = document.querySelector(".donorbox")
databoxshow.addEventListener('click', () => {
    databoxdiv.classList.remove("hidden");
    donorboxdiv.classList.add("hidden");
    databoxshow.classList.add("selected1");
    donorboxshow.classList.remove("selected1");

})
donorboxshow.addEventListener('click', () => {
    databoxdiv.classList.add("hidden");
    donorboxdiv.classList.remove("hidden");
    databoxshow.classList.remove("selected1");
    donorboxshow.classList.add("selected1");

})

for (let i = 0; i < formArray.length; i++) {
    const formdata = formArray[i];
    const donordata = donorArray[i];
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const name = document.createElement('h3');
    const email = document.createElement('p');
    const detailsButton = document.createElement('button');
    const detailsDiv = document.createElement('div');
    const linebreak = document.createElement('hr');
    // backtodata.classList.add("back");
    name.textContent = formdata.state;
    email.textContent = formdata.district;
    detailsButton.textContent = 'Show More';



    detailsDiv.style.display = 'none';
    div.classList.add("detailbox");
    detailsButton.classList.add("showdetails")
    div.innerHTML = `
    <p class="bbnamee"><span id="bold">Blood Bank Name:</span>  ${formdata.bbname}</p>
       <p class="bbstate"><span id="bold">State:</span> ${formdata.state}</p>
        <p class="bbdistrict"><span id="bold">District:</span> ${formdata.district}</p>
        <p class="bbcity"><span id="bold">City:</span> ${formdata.city}</p>
        `;
    detailsDiv.innerHTML = `<div id="blurbox">
    <div id="heading"><p class="bbname"> ${formdata.bbname}</p></div>
    <hr>
    <div id="div1">
    <div id="wholedetail1"><p><span id="bold">Parent Hospital Name:</span>${formdata.phname}</p>
    <p><span id="bold">Short Name:</span>${formdata.sname}</p>
    <p><span id="bold">Category:</span>${formdata.category}</p>
    <p><span id="bold">Contact Person:</span>${formdata.cperson}</p>
    <p><span id="bold">Email:</span>${formdata.email}</p>
    <p><span id="bold">Contact Number:</span>${formdata.cnumber}</p>
    <p><span id="bold">Fax Number:</span>${formdata.fnumber}</p>
    <p><span id="bold">License Number:</span>${formdata.Lnumber}</p>
    <p><span id="bold">From Date:</span>${formdata.fdate}</p>
    </div>
    <div id="wholedetail2">
    <p><span id="bold">To Date:</span>${formdata.tdate}</p>
    <p><span id="bold">Component Facility:</span>${formdata.cfacility}</p>
    <p><span id="bold">Apheresis Facility:</span>${formdata.afacility}</p>
    <p><span id="bold">Hnumber:</span>${formdata.Hnumber}</p>
    <p><span id="bold">Address 1:</span>${formdata.paddress1}</p>
    <p><span id="bold">Address 2:</span>${formdata.paddress2}</p>
    <p><span id="bold">Pincode:</span>${formdata.pcode}</p>
    <p><span id="bold">Website:</span>${formdata.website}</p>
    <p><span id="bold">Number of beds available:</span>${formdata.bedsa}</p>
    </div>
    </div>
    <hr>

    <div id="div2">
        <div id="col1">
        <p><span id="bold">${checkedCheckboxes.vol}</span></p>
        <p><span id="bold">${checkedCheckboxes.replacement}</span></p>
        <p><span id="bold">${checkedCheckboxes.directed}</span></p>
        <p><span id="bold">${checkedCheckboxes.autologous}</span></p>
        <p><span id="bold">${checkedCheckboxes.family}</span></p>
        <p><span id="bold">${checkedCheckboxes.replaceExt}</span></p>
        <p><span id="bold">${checkedCheckboxes2.leucaperesis}</span></p>
        <p><span id="bold">${checkedCheckboxes2.plasmapheresis}</span></p>
        <p><span id="bold">${checkedCheckboxes2.plateletpheresis}</span></p>
        <p><span id="bold">${checkedCheckboxes2.wholeblood}</span></p>
        <p><span id="bold">${checkedCheckboxes3.cryo}</span></p>
        <p><span id="bold">${checkedCheckboxes3.ceyo}</span></p>
        <p><span id="bold">${checkedCheckboxes3.fresh}</span></p>
        </div>
        <div id="col2">
        <p><span id="bold">${checkedCheckboxes3.irradiated}</span></p>
        <p><span id="bold">${checkedCheckboxes3.leu}</span></p>
        <p><span id="bold">${checkedCheckboxes3.packed}</span></p>
        <p><span id="bold">${checkedCheckboxes3.plasma}</span></p>
        <p><span id="bold">${checkedCheckboxes3.platelet}</span></p>
        <p><span id="bold">${checkedCheckboxes3.plateletpoor}</span></p>
        <p><span id="bold">${checkedCheckboxes3.plateletrich}</span></p>
        <p><span id="bold">${checkedCheckboxes3.sagm}</span></p>
        <p><span id="bold">${checkedCheckboxes3.singleplasma}</span></p>
        <p><span id="bold">${checkedCheckboxes3.singleplatelet}</span></p>
        <p><span id="bold">${checkedCheckboxes3.wholeblood2}</span></p>
        <p><span id="bold">${checkedCheckboxes4.single}</span></p>
        <p><span id="bold">${checkedCheckboxes4.double}</span></p>
        </div>

        <div id="col3">
        <p><span id="bold">${checkedCheckboxes4.triple}</span></p>
        <p><span id="bold">${checkedCheckboxes4.quadruple}</span></p>
        <p><span id="bold">${checkedCheckboxes4.Quadruplewithout}</span></p>
        <p><span id="bold">${checkedCheckboxes4.penta}</span></p>
        <p><span id="bold">${checkedCheckboxes4.transfer}</span></p>
        <p><span id="bold">${checkedCheckboxes4.apheresis}</span></p>
        <p><span id="bold">${checkedCheckboxes4.triple350}</span></p>
        <p><span id="bold">${checkedCheckboxes4.triple450}</span></p>
        <p><span id="bold">${checkedCheckboxes5.hiv}</span></p>
        <p><span id="bold">${checkedCheckboxes5.hepatitisB}</span></p>
        <p><span id="bold">${checkedCheckboxes5.hepatitisC}</span></p>
        <p><span id="bold">${checkedCheckboxes5.syphilis}</span></p>
        <p><span id="bold">${checkedCheckboxes5.malaria}</span></p>
        </div>


    </div>
    
        <div id="remarkss">
        <p><span id="bold">${formdata.remarks}</span></p>

        </div>
    </div>



    </div>
   </div>`;



    detailsButton.addEventListener('click', () => {
        if (detailsDiv.style.display === 'none') {
            detailsDiv.style.display = 'block';

        } else {
            detailsDiv.style.display = 'none';

        }

    })




    if (donordata) {
        div2.innerHTML = `
    <div class="detailbox">
    <div id="div3">
        <div >
        <p> <span>Name:</span>${donordata.dname}</p>
        <p> <span>Email:</span>${donordata.demail}</p>
        <p> <span>Address:</span>${donordata.daddress}</p>
        <p> <span>Medical History:</span>${donordata.mhistory}</p>

        </div>
        <div >
        <p><span>Blood group:</span>${donordata.bgroup}</p>
        <p><span>Contact:</span>${donordata.contact}</p>
        <p><span>Age:</span>${donordata.age}</p>
        <p><span>Sex:</span>${donordata.sex}</p>



        </div>
    </div>
    
    </div>
    <hr>
    
    `;
    }














    div.appendChild(detailsButton);
    div.appendChild(detailsDiv);
    formdatadiv.appendChild(div);
    formdatadiv.appendChild(linebreak);
    donorboxdiv.appendChild(div2);
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
