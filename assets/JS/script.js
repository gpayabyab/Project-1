const citySearchBtn = document.getElementById('city-search-form')

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

        window.location.href = './assets/results.html'
    })

   

    //   if (searchType === 'city') {
    //       apiUrl = `https://api.openbrewerydb.org/breweries?by_city=${searchInput}`;
    //   } else if (searchType === 'zip') {
    //       apiUrl = `https://api.openbrewerydb.org/breweries?by_postal=${searchInput}`;
    //   } else if (searchType === 'random') {
    //       apiUrl = 'https://api.openbrewerydb.org/breweries/random';
    //   }


}

citySearchBtn.addEventListener('submit', searchBreweriesByCity)



