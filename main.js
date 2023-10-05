/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

// Dummy data
const USER_VEHICLE_CODE = "tcs123";
const USER_KEY = "pass";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultElement = document.getElementById("res"); // Get the h3 tag with ID "res"

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent form from submitting

        // Get user input
        const enteredVehicleCode = form.querySelector("input[type='text']").value;
        const enteredUserKey = form.querySelector("input[type='password']").value;

        // Check credentials
        if (enteredVehicleCode === USER_VEHICLE_CODE && enteredUserKey === USER_KEY) {
            resultElement.textContent = "Authentication successful!";
            resultElement.style.color = "green"; // Optionally, set the text color to green for success
            setTimeout(function() {
                window.location.href = "details.html"; // redirect to another page after 2 seconds
            }, 2000);
        } else {
            resultElement.textContent = "Incorrect Vehicle Code or User Key!";
            resultElement.style.color = "red"; // Optionally, set the text color to red for error
        }
    });
});// Assuming the engine temperature can vary between 70°C and 80°C

let currentTemp = 75;

function updateEngineTemperature() {
    const tempElement = document.getElementById('engineTemp');
    
    // Randomly increase or decrease the temperature by 1°C
    const change = Math.random() > 0.5 ? 1 : -1;
    currentTemp += change;

    // Ensure the temperature remains within the range of 70°C to 80°C
    if (currentTemp < 70) currentTemp = 70;
    if (currentTemp > 80) currentTemp = 80;

    tempElement.textContent = `Engine Temperature: ${currentTemp}°C`;
}

// Update the engine temperature every 2 seconds
setInterval(updateEngineTemperature, 2000);

