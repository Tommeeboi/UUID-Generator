const uuij = document.getElementById("uuid");
const copy = document.getElementById("copy");

copy.onclick = function() {
  navigator.clipboard.writeText(uuij.innerText);
}