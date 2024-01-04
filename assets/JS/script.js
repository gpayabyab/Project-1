axios.defaults.baseURL = "https://api.openbrewerydb.org/breweries";

const input = document.getElementById("search-input");

input.addEventListener("keyup", function(e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    document.getElementById("search-btn").click();
  }
});
