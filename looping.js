var seats = [ false, true, false, true, true, true, false, true, false ];
var selSeat = -1;

function initSeats() {
  // Initialize the appearance of all seats
  for (var i = 0; i < seats.length; i++) {
    if (seats[i]) {
      // Set the seat to available
      document.getElementById("seat" + i).src = "seat_avail.png";
      document.getElementById("seat" + i).alt = "Available seat";
    }
    else {
      // Set the seat to unavailable
      document.getElementById("seat" + i).src = "seat_unavail.png";
      document.getElementById("seat" + i).alt = "Unavailable seat";
    }
  }
}

function findSeat() {
  // If seat is already selected, reinitialize all seats to clear them
  if (selSeat >= 0) {
    selSeat = -1;
    initSeats();
  }

  // Search through all the seats for availability
  for (var i = 0; i < seats.length; i++) {
    // See if the current seat is available
    if (seats[i]) {
      // Set the seat selection and update the appearance of the seat
      selSeat = i;
      document.getElementById("seat" + i).src = "seat_select.png";
      document.getElementById("seat" + i).alt = "Your seat";

      // Prompt the user to accept the seat
      var accept = confirm("Seat " + (i + 1) + " is available. Accept?");
      if (accept){
      // The user accepted the seat so break the loop
        break;
      }
      }
      if (!accept) {
        // The user rejected the seat, so clear the seat selection and keep looking
        selSeat = -1;
        document.getElementById("seat" + i).src = "seat_avail.png";
        document.getElementById("seat" + i).alt = "Available seat";
      
      }
    }
}
