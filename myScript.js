function myfuncone() {
	document.getElementById("test").innerHTML = "Loves to code";
};
function myfunctwo() {
	document.getElementById("test").innerHTML = "Member at FOSS club";
};
setTimeout(myfuncone, 2500);
setTimeout(myfunctwo, 5000);

