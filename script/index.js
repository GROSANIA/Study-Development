function profile() {
    window.location.href = "profile.html";
}
function nav() {
    var drdw = document.getElementById('infopanel');
    drdw.style.display = (drdw.style.display === 'none') ? 'flex' : 'none';
}
// Check if the user is already logged 
function checkLoginStatus() {
    var username = localStorage.getItem('name');
    var dsname = document.getElementById("displayname");
    if (username !== null) {
        dsname.innerHTML = username;
    } else {
        dsname.innerHTML = "you aren't logged in";
        localStorage.removeItem('name');
        alert('You are not logged in');
        window.location.replace("login.html");
    }
}
document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('cdirdc');
  video.pause(); // Pauses the video when the page is loaded

  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    }
  });
});

window.onload = checkLoginStatus;