/* =====================================
TASK 2 - Data Types & Operators
===================================== */

const portalName = "Local Community Event Portal";
const eventDate = "2026-06-15";
let seats = 50;

console.log(`${portalName} | Event Date : ${eventDate}`);

/* =====================================
TASK 3 - Conditionals, Loops & Error Handling
===================================== */

const eventList = [
    "Music Festival",
    "Sports Day",
    "Workshop"
];

eventList.forEach(function(event){
    console.log(event);
});

try {

    if(seats <= 0){
        throw "No Seats Available";
    }

} catch(error){

    console.log(error);
}

/* =====================================
TASK 4 - Functions, Closures
===================================== */

function addEvent(name){
    console.log("New Event Added : " + name);
}

function filterEventsByCategory(category){
    console.log("Category : " + category);
}

function registrationCounter(){

    let total = 0;

    return function(){

        total++;
        return total;
    };
}

const counter = registrationCounter();

/* =====================================
TASK 5 - Objects & Classes
===================================== */

class Event{

    constructor(name,date,seats){

        this.name = name;
        this.date = date;
        this.seats = seats;
    }

    checkAvailability(){

        return this.seats > 0;
    }
}

const musicEvent =
new Event("Music Festival","2026-06-15",50);

console.log(musicEvent.checkAvailability());

Object.entries(musicEvent).forEach(
([key,value]) => {

    console.log(key,value);

});

/* =====================================
TASK 6 - Arrays & Methods
===================================== */

let events = [
    "Music Festival",
    "Sports Day"
];

events.push("Food Festival");

let musicEvents =
events.filter(event =>
event.includes("Music"));

let displayEvents =
events.map(event =>
"Workshop on " + event);

console.log(musicEvents);
console.log(displayEvents);

/* =====================================
TASK 9 - Async JS
===================================== */

fetch(
"https://jsonplaceholder.typicode.com/posts/1"
)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

async function loadEvents(){

    try{

        let response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
        );

        let data =
        await response.json();

        console.log(data);

    }
    catch(error){

        console.log(error);
    }
}

/* =====================================
TASK 10 - Modern JavaScript
===================================== */

const eventInfo = {
    name:"Music Festival",
    date:"2026-06-15"
};

const {name,date} = eventInfo;

console.log(name,date);

const clonedEvents = [...events];

/* =====================================
TASK 11 - Forms
===================================== */

function validateForm(event){

    event.preventDefault();

    console.log("Form Submitted");
}

/* =====================================
TASK 12 - AJAX & Fetch API
===================================== */

function sendRegistration(){

    setTimeout(function(){

        fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"User",
                event:"Music Festival"
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));

    },2000);
}

/* =====================================
TASK 14 - jQuery & Framework Notes
===================================== */

// $('#registerBtn').click(function(){
//     alert("Registered");
// });

// $('.eventCard').fadeIn();
// $('.eventCard').fadeOut();

// React / Vue benefit:
// Faster UI updates using reusable components.