// Assuming the engine temperature can vary between 70°C and 80°C
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
setInterval(updateEngineTemperature, 1000);
