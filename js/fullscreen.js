var elem = document.getElementById("aquagame");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

localStorage.setItem('gamelink', document.getElementById("aquagame").src);
function changeMethod(link) {
  document.getElementById("aquagame").src = link
}
