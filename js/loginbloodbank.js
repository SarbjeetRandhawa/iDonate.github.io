

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');

const form1 = document.getElementById('form1');

const form2 = document.getElementById('form2');

const btn1 = document.getElementById('btn1');
const back = document.getElementById('backtoprev')


const top2 = document.getElementById('btn1');

const loader = document.querySelector('.content');

function myfunction() {
  loader.style.display = "none";
}


hideoption1 = function () {
  form1.classList.add("hidden");
  form2.classList.remove("hidden");
  option1.classList.remove("underline");
  option2.classList.add("underline");
  document.documentElement.scrollTop = 0;


}
hideoption2 = function () {
  form2.classList.add("hidden");
  form1.classList.remove("hidden");
  option1.classList.add("underline");
  option2.classList.remove("underline");
  document.documentElement.scrollTop = 0;
}
option1.onclick = hideoption2;

option2.onclick = hideoption1;

btn1.onclick = hideoption1;
back.onclick = hideoption2;




const form = document.querySelector('#formbloodbank');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bbname = document.querySelector('#bbname').value;

  const state = document.querySelector('#states').value;
  const district = document.querySelector('#district').value;
  const city = document.querySelector('#city').value;
  const phname = document.querySelector('#phname').value;
  const sname = document.querySelector('#sname').value;
  const category = document.querySelector('#category').value;
  const cperson = document.querySelector('#cperson').value;
  const email = document.querySelector('#email').value;
  const cnumber = document.querySelector('#ContactN').value;
  const fnumber = document.querySelector('#faxinput').value;
  const Lnumber = document.querySelector('#lno').value;
  const fdate = document.querySelector('#Fdate').value;
  const tdate = document.querySelector('#Tdate').value;
  const Cfacility =document.querySelector('#cfacility').value;
  const afacility = document.querySelector('#afacility').value;
  const Hnumber = document.querySelector('#Hnumber').value;
  const paddress1 = document.querySelector('#pa1').value;
  const paddress2 = document.querySelector('#pa2').value;
  const pcode = document.querySelector('#pcode').value;
  const website = document.querySelector('#website').value;
  const bedsa = document.querySelector('#opennin2').value;
  const remarks = document.querySelector('#remarks').value;
  




  const checkbox1 = document.getElementById("checkbox1");
  const checkedCheckboxes = {};
  checkbox1.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes[checkbox.name] = checkbox.value;
      console.log(checkbox.name);
    } else {
      checkedCheckboxes[checkbox.name] = "_";
    }
  });
  
 
  localStorage.setItem('checkedCheckboxes', JSON.stringify(checkedCheckboxes));

  const checkbox2 = document.getElementById("checkbox2");
  const checkedCheckboxes2 = {};
  checkbox2.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes2[checkbox.name] = checkbox.value;
      console.log(checkbox.name);
    } else {
      checkedCheckboxes2[checkbox.name] = "_";
    }
  });
  
 
  localStorage.setItem('checkedCheckboxes2', JSON.stringify(checkedCheckboxes2));


  const checkbox3 = document.getElementById("checkbox3");
  const checkedCheckboxes3 = {};
  checkbox3.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes3[checkbox.name] = checkbox.value;
      console.log(checkbox.name);
    } else {
      checkedCheckboxes3[checkbox.name] = "_";
    }
  });
  
 
  localStorage.setItem('checkedCheckboxes3', JSON.stringify(checkedCheckboxes3));



  
  const checkbox4 = document.getElementById("checkbox4");
  const checkedCheckboxes4 = {};
  checkbox4.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes4[checkbox.name] = checkbox.value;
      console.log(checkbox.name);
    } else {
      checkedCheckboxes4[checkbox.name] = "_";
    }
  });
  
 
  localStorage.setItem('checkedCheckboxes4', JSON.stringify(checkedCheckboxes4));


  const checkbox5 = document.getElementById("checkbox5");
  const checkedCheckboxes5 = {};
  checkbox5.querySelectorAll("input[type='checkbox']").forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCheckboxes5[checkbox.name] = checkbox.value;
      console.log(checkbox.name);
    } else {
      checkedCheckboxes5[checkbox.name] = "_";
    }
  });
  
 
  localStorage.setItem('checkedCheckboxes5', JSON.stringify(checkedCheckboxes5));



  const formData = { state, district, bbname, city, phname, sname, category, cperson, email, cnumber, fnumber, Lnumber, fdate, tdate, Cfacility, afacility, Hnumber, paddress1, paddress2, pcode, website, bedsa,remarks };
  let formArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
  formArray.push(formData);
  localStorage.setItem('formDataArray', JSON.stringify(formArray));
  //   window.location.href = 'display.html';
  swal({
    icon: 'success',
    title: 'Success!',
    text: 'Your form data has been submitted successfully.',
    confirmButtonText: 'OK'
  }).then(() => {
    window.location.href = 'blodddisplay.html';
  });

});

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
