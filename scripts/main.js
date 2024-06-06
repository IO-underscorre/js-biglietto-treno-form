// Random function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ticketGenerator = document.getElementById("ticket-form");
const pricePerKm = 0.21;

ticketGenerator.addEventListener("submit" , 
    function ()  { 
        const travelDistance = parseFloat(document.getElementById("distance-imput").value);
        const userAge = parseInt(document.getElementById("age-input").value);
        
        // dicountedPrice is the totality of price (1) minus the discount fraction
        let discountedPriceFr = userAge === "overage" ? 0.6 : userAge === "underage" ? 0.8 : 1;
        
        // Ticket price calculator
        let ticketPrice = Math.round(((travelDistance * pricePerKm * discountedPriceFr) + Number.EPSILON) * 100) / 100;
        
        // Ticket section enabler
        document.getElementById("your-ticket").style.display = "block";
        
        // Ticket infos filler
        document.getElementById("user-name").innerHTML = document.getElementById("input-name").value;
        document.getElementById("offer-type").innerHTML = "Standard";
        document.getElementById("carriage").innerHTML = getRandomInt(0, 20);
        document.getElementById("ticket-code").innerHTML = getRandomInt(1000, 9999);
        document.getElementById("ticket-price").innerHTML = "&euro; " + ticketPrice;
    }
);