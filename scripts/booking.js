/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35; // Current price for each day
var weeklyCost = 0; // How much it will cost for the week
var dayCounter = 0; // How many days are selected
const WEEKLY_COST_HTML = document.getElementById("calculated-cost"); // Calculated Cost html
const CLEAR_DAYS_HTML = document.getElementById("clear-button");
const FULL_DAY_HTML = document.getElementById("full");
const HALF_DAY_HTML = document.getElementById("half");

const DAYS = []; // Array containing all the days
const MON = document.getElementById("monday"); // Monday button
const TUE = document.getElementById("tuesday"); // Tuesday button
const WED = document.getElementById("wednesday"); // Wednesday button
const THUR = document.getElementById("thursday"); // Thursday button
const FRI = document.getElementById("friday"); // Friday button
DAYS.push(MON, TUE, WED, THUR, FRI); // adds the days into the array



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickedDay(day){ // Added an additional feature where days can be unchecked
    // If element has the class "clicked", remove the class and decrease the days counter by 1.
    // Otherwise, add the class "clicked" and increase the days counter by 1.
    // Then, call the update() function to change the innerHTML elements.

    if (day.classList.contains("clicked")){
        day.classList.remove("clicked");
        dayCounter--;
    }
    else {
        day.classList.add("clicked");
        dayCounter++;
    }
    update();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays(){
    // Remove all "clicked" classes from each day in the days array. Sets relevant variables to 0
    // DAYS.forEach((element) => {element.classList.remove("clicked");});

    for (const day of DAYS) {
        day.classList.remove("clicked");
    }
    dayCounter = 0;
    weeklyCost = 0;
    update();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDay(){
    HALF_DAY_HTML.classList.add("clicked");
    FULL_DAY_HTML.classList.remove("clicked");
    costPerDay = 20;
    update();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDay(){
    HALF_DAY_HTML.classList.remove("clicked");
    FULL_DAY_HTML.classList.add("clicked");
    costPerDay = 35;
    update();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function update(){
    weeklyCost = costPerDay * dayCounter; // Sets weekly cost, and changes innerhtml based on calculation
    WEEKLY_COST_HTML.innerHTML = weeklyCost;
}

function assignDayButton(day){ 
    // this function assigns the clickedDay function to the day buttons.
    // i made this so i wouldn't have to type out an eventlistener for each day
    day.addEventListener("click", function() {clickedDay(day);});
}

/********* setting event listeners *********/
// for each day in the days array, assign an on click event listener. assigns the clickedDay function to it, using the day as a parameter
DAYS.every(assignDayButton);

// other buttons, aside from weekdays
CLEAR_DAYS_HTML.addEventListener("click", clearDays);
HALF_DAY_HTML.addEventListener("click", halfDay);
FULL_DAY_HTML.addEventListener("click", fullDay);