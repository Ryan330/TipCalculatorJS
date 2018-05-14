//Ask user for total bill amount
var total = prompt("What is the total amount of your bill?: ");


//Ask user for total amount of people
var people = prompt("What is the total amount of people?: ");


//Ask user for service rating
var rating = prompt("How was the overall service? Good, Fair, or Bad?: ");


//Check user's service rating
if (rating == "Good" || rating == "good") {rating = total * 0.20};

if (rating == "Fair" || rating == "fair") {rating = total * 0.15};

if (rating == "Bad" || rating == "bad") {rating = total * 0.10};

//Tip Amount
console.log(`Tip Amount: $${rating}`);


//Calculate Overall Total
var sum = parseInt(total) + rating;

//Calculate total for each person
var split_sum = rating / parseInt(people);


//Total Amount
console.log(`Total Amount: $${sum}`);


//Amount Per Person
console.log(`Amount Per Person: $${split_sum}`);