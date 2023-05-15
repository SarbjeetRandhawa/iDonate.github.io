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


