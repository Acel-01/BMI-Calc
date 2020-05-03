


function myFunction() {
  var a = parseInt(document.getElementById("kg").value);
  var b = parseInt(document.getElementById("m").value);

  var c = a/(b*b);
  var d = c + "Kg/m^2";

  document.getElementById("rep").innerHTML = 
  d;
}