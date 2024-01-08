const citySearchBtn = document.getElementById('city-search-form');
const zipSeachBtn = document.getElementById('zip-search-form');

function searchBreweriesByCity(event) {
    event.preventDefault();
    // capture the user input
    let cityInput = document.getElementById('city-input');

    // the user input will then be added to the api url
    let apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=' + cityInput.value;


    // fetch the data from the api. once it returns the inital response. we will need to JSON the data. Once the Data is converted we can then use it to add content to the page
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);

        localStorage.setItem('cityBreweryData', JSON.stringify(data))

        window.location.href = './assets/cityresults.html'
    })

   

    //   if (searchType === 'city') {
    //       apiUrl = `https://api.openbrewerydb.org/breweries?by_city=${searchInput}`;
    //   } else if (searchType === 'zip') {
    //       apiUrl = `https://api.openbrewerydb.org/breweries?by_postal=${searchInput}`;
    //   } else if (searchType === 'random') {
    //       apiUrl = 'https://api.openbrewerydb.org/breweries/random';
    //   }


}


function searchBreweriesByZip(event) {
    event.preventDefault();
    // capture user input for zip code
    let zipInput = document.getElementById('zip-input');

    // user input will then be added to the api url
    let zipApiUrl = 'https://api.openbrewerydb.org/v1/breweries?by_postal=' + zipInput.value;

    // fetch the data from the api. once it returns the inital response. we will need to JSON the data. Once the Data is converted we can then use it to add content to the page
    fetch(zipApiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);

        localStorage.setItem('zipcodeBreweryData', JSON.stringify(data))

        window.location.href = './assets/zipcoderesults.html'
    })

}




citySearchBtn.addEventListener('submit', searchBreweriesByCity)
zipSeachBtn.addEventListener('submit', searchBreweriesByZip)