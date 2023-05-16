

const loader = document.querySelector('.content');

function myfunction() {
  loader.style.display = "none";
}



function validation() {
    if (document.register.Name.value == "") {

        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.register.Name.value.length < 6) {
        document.getElementById("result").innerHTML = "Username must contain atleast 6 letters*";
        return false;
    }
    else if (document.register.email.value == "") {
        document.getElementById("result").innerHTML = "Enter your email*";
        return false;
    }
    else if (document.register.pw.value == "") {
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    }
    else if (document.register.pw.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6-digits  ";
        return false;
    }
    else if (document.register.cpw.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm Password ";
        return false;
    }

    else if (document.register.pw.value !== document.register.cpw.value) {
        document.getElementById("result").innerHTML = "Password doesn't matched*";
        return false;
    } else {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        
        
          const username = document.register.Name.value;
          const password = document.register.pw.value;
        
          const newUser = { username, password };
          
          registeredUsers.push(newUser);
        
          localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        
          console.log(registeredUsers); // for testing purposes only
       
        

        swal({
            icon: 'success',
            title: 'Success!',
            text: 'Registered Successfully ',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = 'loginuser.html';
        });






        return false;
    }







}

