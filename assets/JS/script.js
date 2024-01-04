async function searchBreweries() {
  const searchType = document.getElementById('search-type').value;
  const searchInput = document.getElementById('search-input').value;
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  let apiUrl = '';

  if (searchType === 'city') {
      apiUrl = `https://api.openbrewerydb.org/breweries?by_city=${searchInput}`;
  } else if (searchType === 'zip') {
      apiUrl = `https://api.openbrewerydb.org/breweries?by_postal=${searchInput}`;
  } else if (searchType === 'random') {
      apiUrl = 'https://api.openbrewerydb.org/breweries/random';
  }

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.length === 0) {
          resultsContainer.innerHTML = '<p>No breweries found.</p>';
      } else {
          data.forEach(brewery => {
              resultsContainer.innerHTML += `<div>
                  <h3>${brewery.name}</h3>
                  <p>${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}</p>
                  <p>Type: ${brewery.brewery_type}</p>
              </div>`;
          });
      }
  } catch (error) {
      resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
  }
}

