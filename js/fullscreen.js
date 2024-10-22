var elem = document.getElementById("screen");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

localStorage.setItem('gamelink', document.getElementById("screen").src);
function changeMethod(link) {
  document.getElementById("screen").src = link
}
