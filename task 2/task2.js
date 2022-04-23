function calculateVolume() {
let radius = document.getElementById("Rad").value;
let volume = 4/3*Math.PI*Math.pow(radius,3);
document.getElementById("vol").value = volume.toFixed(2);
}
let button = document.getElementById("btn");
button.onclick = calculateVolume;
