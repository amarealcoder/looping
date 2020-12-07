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
  // Search through all the seats for availability (This function is set to find three vacant seats in a row)
  for (var i = 0; i < seats.length; i++) {
    // See if the current seat plus the next two seats are available
    if (seats[i] && seats[i + 1] && seats[i + 2]) {
      // Set the seat selection and update the appearance of the seats
      selSeat = i;
      document.getElementById("seat" + i).src = "seat_select.png";
      document.getElementById("seat" + i).alt = "Your seat";
      document.getElementById("seat" + (i + 1)).src = "seat_select.png";
      document.getElementById("seat" + (i + 1)).alt = "Your seat";
      document.getElementById("seat" + (i + 2)).src = "seat_select.png";
      document.getElementById("seat" + (i + 2)).alt = "Your seat";

      // Prompt the user to accept the seats
      var accept = confirm("Seats " + (i + 1) + " through " + (i + 3) + " are available. Accept?");
      if (accept) {
      // The user accepted the seat, so we're done
      break;
      }
      else {
        // The user rejected the seats, so clear the seat selection and keep looking
        selSeat = -1;
        document.getElementById("seat" + i).src = "seat_avail.png";
        document.getElementById("seat" + i).alt = "Available seat";
        document.getElementById("seat" + (i + 1)).src = "seat_avail.png";
        document.getElementById("seat" + (i + 1)).alt = "Available seat";
        document.getElementById("seat" + (i + 2)).src = "seat_avail.png";
        document.getElementById("seat" + (i + 2)).alt = "Available seat";
      }
    }
  }
}
  
