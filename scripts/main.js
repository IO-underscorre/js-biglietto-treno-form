const travelDistance =  parseFloat(prompt("Insert the lenght of your train ride in kilometers"));
const userAge = parseInt(prompt("Insert your age"));
const pricePerKm = 0.21;

// dicountedPrice is the totality of price (1) minus the discount fraction
let discountedPricePct = userAge > 65 ? 0.6 : userAge < 18 ? 0.8 : 1;

// Ticket price calculator
let ticketPrice = Math.round(((travelDistance * pricePerKm * discountedPricePct) + Number.EPSILON) * 100) / 100;

// Print and log
console.log(ticketPrice)

document.getElementById("travel-distance").innerHTML = travelDistance;
document.getElementById("user-age").innerHTML = userAge;
document.getElementById("ticket-price").innerHTML = ticketPrice;