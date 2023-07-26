document.getElementById('loginButton').addEventListener('click', function() {
  login();
});

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = [
    { username: 'ramsr1', password: 'csse23', name: 'Ramsr' },
    { username: 'dim01', password: 'wokwok', name: 'Dimas' },
    { username: 'ubayboy', password: 'ubey1', name: 'Ubaydillah' },
    { username: 'rezpro91', password: 'prg91a', name: 'Rezky.A.P' },
    { username: 'karel01', password: 'okoklah', name: 'Karel.P' },
  ];

  const findedUser = users.find((user) => user.username == username && user.password == password);
  if (findedUser != undefined) {
    localStorage.setItem('name', findedUser.name);
    window.location.href = "index.html";
    alert('Login successful!');
  } else {
    alert('Username or Password is wrong!');
  }
}


function faq() {
  window.location.href = "Faq.html";
}