const seats = document.querySelectorAll('.seat');
const confirmButton = document.querySelector('#confirm-button');
const selectedSeatDisplay = document.querySelector('#selected-seat');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    selectedSeatDisplay.innerHTML = seat.id || 'N/A';
  });
});

confirmButton.addEventListener('click', () => {
  // Add code to handle the confirmation of the selected seat
});
