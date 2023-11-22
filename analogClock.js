// Function to get the right time
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours(); // Gets the current hour
  const minutes = currentTime.getMinutes(); // Gets the current minute
  const seconds = currentTime.getSeconds(); // Gets the current second

  // Select the DOM elements representing the hour, minute, and second hands
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  // Calculate the rotation angle for each clock hand based on the current time
  // Each hour represents 30 degrees, and each minute contributes 0.5 degrees
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; 
  // Each minute represents 6 degrees
  const minAngle = minutes * 6; 
  // Each second represents 6 degrees
  const secondAngle = seconds * 6; 

  /* 
  Apply the calculated rotation angles to the 
    corresponding clock hands using CSS transform property
  */
 // Set the rotation angle for the hour-hand
  hourHand.style.transform = `rotate(${hourAngle}deg)`; 
  // Set the rotation angle for the minute-hand
  minHand.style.transform = `rotate(${minAngle}deg)`; 
   // Set the rotation angle for the second-hand
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}
setInterval(updateClock, 1000); // Updates every second
updateClock(); // Initial update
