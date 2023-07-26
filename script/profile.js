function faq() {
    window.location.href = "faq.html";
}
function coursepage() {
    window.location.href = "index.html";
}
    
// Clear the logged-in status
function logout() {
    localStorage.removeItem('name');
    alert('Logged out successfully');
    window.location.replace("login.html");
}

// Check if the user is already logged in
function checkLoginStatus() {
    const userInformation = {
      'Ramsr': {
        totalcrs: '4',
        intrdcmplt: '100',
        crs1cmplt: '100',
        crs2cmplt: '100',
        crs3cmplt: '100'
      },
      'Dimas': {
        totalcrs: '0',
        intrdcmplt: '100',
        crs1cmplt: '0',
        crs2cmplt: '0',
        crs3cmplt: '0'
      },
      'Karel.P': {
        totalcrs: '0',
        intrdcmplt: '0',
        crs1cmplt: '0',
        crs2cmplt: '0',
        crs3cmplt: '0'
      },
      'Rezky.A.P': {
        totalcrs: '0',
        intrdcmplt: '0',
        crs1cmplt: '0',
        crs2cmplt: '0',
        crs3cmplt: '0'
      },
      'Ubaydillah': {
        totalcrs: '1',
        intrdcmplt: '80',
        crs1cmplt: '0',
        crs2cmplt: '0',
        crs3cmplt: '0'
      }
    };
  
    const username = localStorage.getItem('name');
    const dsname = document.getElementById('displayname');
    const intrd = document.getElementById('intrd');
    const crs1 = document.getElementById('crs1prg');
    const crs2 = document.getElementById('crs2prg');
    const crs3 = document.getElementById('crs3prg');
  
    if (username in userInformation) {
      const userInfo = userInformation[username];
  
      dsname.innerHTML = username;
      intrd.innerHTML = userInfo.intrdcmplt + '%';
      intrd.style.background = `linear-gradient(to right, rgb(19, 207, 75), rgb(19, 207, 75) ${userInfo.intrdcmplt}%, #f3f3f3 ${userInfo.intrdcmplt}%)`;
      intrd.style.backgroundSize = '100% 100%';
      crs1.innerHTML = userInfo.crs1cmplt + '%';
      crs1.style.background = `linear-gradient(to right, rgb(19, 207, 75), rgb(19, 207, 75) ${userInfo.crs1cmplt}%, #f3f3f3 ${userInfo.crs1cmplt}%)`;
      crs1.style.backgroundSize = '100% 100%';
      crs2.innerHTML = userInfo.crs2cmplt + '%';
      crs2.style.background = `linear-gradient(to right, rgb(19, 207, 75), rgb(19, 207, 75) ${userInfo.crs2cmplt}%, #f3f3f3 ${userInfo.crs2cmplt}%)`;
      crs2.style.backgroundSize = '100% 100%';
      crs3.innerHTML = userInfo.crs3cmplt + '%';
      crs3.style.background = `linear-gradient(to right, rgb(19, 207, 75), rgb(19, 207, 75) ${userInfo.crs3cmplt}%, #f3f3f3 ${userInfo.crs3cmplt}%)`;
      crs3.style.backgroundSize = '100% 100%';
    } else {
      dsname.innerHTML = 'You are not logged in';
      localStorage.removeItem('name');
      alert('You are not logged in');
      window.location.replace('login.html');
    }
}  

window.onload = checkLoginStatus;