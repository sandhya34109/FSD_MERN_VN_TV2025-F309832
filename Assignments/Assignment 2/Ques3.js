let name = "Sandhya";

let message = "Hello, " + name + "! Welcome to JavaScript.";
console.log(message);

let upperName = name.toUpperCase();
console.log("Uppercase Name: " + upperName);

if (message.length > 10) {
    console.log("The message has more than 10 characters.");
} else {
    console.log("The message has 10 or fewer characters.");
}

if (message.includes("JavaScript")) {
    console.log("The message contains the word 'JavaScript'.");
} else {
    console.log("The message does NOT contain the word 'JavaScript'.");
}
