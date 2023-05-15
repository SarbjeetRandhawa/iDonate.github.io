const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
console.log(registeredUsers[0]);

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.loginf.username.value;
  console.log(username);
  const password = document.loginf.pw.value;
  console.log(password);

  const user = registeredUsers.find((user) => user.username === username && user.password === password);
  console.log(user);

  if (user) {
    console.log(user);
    const user1 = user.username;
	localStorage.setItem('userdis', user1);

	localStorage.setItem('loggedIn', true);

	window.location.href = 'donerform.html';
    

  } else {
    console.log('Incorrect username or password');
	swal({
		icon: 'error',
		title: 'Error',
		text: ' Incorrect username or password',
		confirmButtonText: 'Retry'
	})
	loginForm.reset();

  }
  
  
});



