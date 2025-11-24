let totalSeats = 120;
let bookedSeats = 78;

// Calculate available seats
let availableSeats = totalSeats - bookedSeats;
console.log("Available Seats:", availableSeats);

// Check status
let status = "";

if (availableSeats < 20) {
    status = "Almost Full";
} else if (availableSeats >= 20 && availableSeats <= 60) {
    status = "Moderate Availability";
} else if (availableSeats > 60) {
    status = "Plenty of Seats Available";
}

console.log("Status:", status);
