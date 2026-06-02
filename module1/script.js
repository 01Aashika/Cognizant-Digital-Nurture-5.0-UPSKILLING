function registerUser() {
alert("Registration Successful");
}

function showFee() {
let fee = document.getElementById("eventfee").value;

```
document.getElementById("fee").innerHTML =
    "Event Fee : ₹" + fee;
```

}

function submitFeedback() {
alert("Feedback Submitted Successfully");
}

function countChar() {
let count =
document.getElementById("feedback").value.length;

```
document.getElementById("count").innerHTML =
    "Characters : " + count;
```

}

function enlargeImage(img) {

    if (img.width == 150) {

        img.width = 300;
        img.height = 200;

    } else {

        img.width = 150;
        img.height = 100;
    }
}




function savePreference() {
    alert("Your preferences have been saved");
}

function clearpreference() {
    alert("Your preferences have been cleared");
}

function clearData() {

```
localStorage.clear();
sessionStorage.clear();

alert("Preferences Cleared");
```

}
function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    } else {

        document.getElementById("location").innerHTML =
            "Geolocation Not Supported";
    }
}

function showPosition(position) {

    document.getElementById("location").innerHTML =
        "Latitude : " + position.coords.latitude +
        "<br>Longitude : " + position.coords.longitude;
}

function showError(error) {

    document.getElementById("location").innerHTML =
        "Location Access Denied";
}

function videoReady() {

```
document.getElementById("videoMsg").innerHTML =
    "Video Ready To Play";
```

}

function debugProject() {

    var users = 50;

    console.log("Registered Users : " + users);

    alert("Check Console Tab");
}
