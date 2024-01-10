document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "c120eb4512edae3031f1a647615f6499";
    const city = 'leesburg';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Get the element to update
    const weatherInfoElement = document.getElementById('weather-info');

    // Fetch weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the DOM element with weather data
            const temperature = data.main.temp;
            const temperatureFahrenheit = (temperature * 9/5) + 32;
            const description = data.weather[0].description;
            const weatherText = `Temperature: ${temperatureFahrenheit} °F, Description: ${description}`;

            weatherInfoElement.textContent = weatherText;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoElement.textContent = 'Failed to fetch weather';
        });
});
