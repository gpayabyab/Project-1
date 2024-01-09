const backBtn = document.getElementById("back-btn");
const containerDiv = document.getElementById("container");


function retrieveRandomBrewery() {
    const breweryData = JSON.parse(localStorage.getItem("randomBreweryData"));
    console.log(breweryData);

    // iterate through array and print to page
    for (let i = 0; i < breweryData.length; i++) {



        // print random, name, address, city, and number
        const breweryDiv = document.createElement("div");
        const breweryContentDiv = document.createElement("div");
        const breweryName = document.createElement("h3");
        const breweryAddress = document.createElement("p");
        const breweryCity = document.createElement("p");
        const breweryWeb = document.createElement("a");

        // Set href attribute for the website URL
        if (breweryData[i].website_url) {
            breweryWeb.href = breweryData[i].website_url;
            breweryWeb.textContent = "Visit Website";
           } else {
            breweryWeb.textContent = "Website not available";
        }

        // set styling for div's
        breweryDiv.setAttribute("class", "card")
        breweryContentDiv.setAttribute("class", "card-content")
        breweryName.setAttribute("style", "color: black")
        breweryAddress.setAttribute("style", "color: black")
        breweryCity.setAttribute("style", "color: black")

        // add content to elements
        breweryName.textContent = breweryData[i].name;
        breweryAddress.textContent = breweryData[i].address_1;
        breweryCity.textContent = breweryData[i].city;
        breweryWeb.textContent = breweryData[i].website_url;

        // append elements to breweryDiv
        breweryDiv.append(breweryContentDiv);
        breweryContentDiv.append(breweryName, breweryAddress, breweryCity, breweryWeb)
        containerDiv.appendChild(breweryDiv);
    }
}


function goHome() {
    window.location.href = '../index.html';
}

backBtn.addEventListener("click", goHome);

retrieveRandomBrewery();