function initseats(){
    //initilize the action of all looops
for(var i = 0; i < seat.length; i++){
    if(seat[i]){
        //set the seat to available 
        document.getElementById("seat" + i).src = "seat_avail.png";
        document.getElementById("seat" + i).alt = "availaible seat";
        }
        //set the seat to unavailable
    else{
        document.getElementById("seat" + i).src = "seat_unavail.png"
        document.getElementById("seat" + i).alt = "unavailable seat"
        }
    }
}