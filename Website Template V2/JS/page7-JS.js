var normalSeatsSelected = 0;
var specialSeatsSelected = 0;
var allSeatsSelected = 0;
var normalSeatPrice = 160;
var specialSeatPrice = 180;
function changeImage(imageId) {
  var imageId = document.getElementById(imageId);
  if (imageId.src.match("../Assets/chair.png")) {
    imageId.src = "../Assets/Booking.png";
    normalSeatsSelected++;
    allSeatsSelected++;
  } 
  else {
    imageId.src = "../Assets/chair.png";
    normalSeatsSelected--;
    allSeatsSelected--;
  }
  document.getElementById("normal").textContent = normalSeatsSelected; // display total price in output field
  document.getElementById("all-seats").textContent = allSeatsSelected; // display total price in output field
  UpdatePrice()
}
function changeImageSofa(imageId) {
  var imageId = document.getElementById(imageId);
  if (imageId.src.match("../Assets/sofa.png")) {
    imageId.src = "../Assets/bookingsofa.png";
    specialSeatsSelected++;
    allSeatsSelected++;
  } else {
    imageId.src = "../Assets/sofa.png";
    specialSeatsSelected--;
    allSeatsSelected--;
  }
  document.getElementById("sofa").textContent = specialSeatsSelected; // display total price in output field
  document.getElementById("all-seats").textContent = allSeatsSelected; // display total price in output field
  UpdatePrice()
}
function UpdatePrice(){
  var totalPrice = (normalSeatsSelected*normalSeatPrice)+(specialSeatsSelected*specialSeatPrice);
  document.getElementById("total-price").textContent = totalPrice; // display total price in output field
}