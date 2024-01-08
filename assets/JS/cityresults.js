const backBtn = document.getElementById("back-btn");
const containerDiv = document.getElementById("container");


function retrieveStorageCity() {
    const breweryData = JSON.parse(localStorage.getItem("cityBreweryData"));
    console.log(breweryData);

    // iterate through array to print to the page
    for (let i = 0; i < breweryData.length; i++) {
        
       
            
            // print name, address, city, and number on page
            const breweryDiv = document.createElement("div");
            const breweryName = document.createElement("h3");
            const breweryAddress = document.createElement("p");
            const breweryCity = document.createElement("p");
            const breweryNumber = document.createElement("a");

            // set styling for brewery div's
            breweryDiv.setAttribute("class", "")
            containerDiv.setAttribute("class", "")
            
            // add content to elements
            breweryName.textContent = breweryData[i].name;
            breweryAddress.textContent = breweryData[i].address_1;
            breweryCity.textContent = breweryData[i].city;
            breweryNumber.textContent = breweryData[i].phone;

            // append new elements to breweryDiv
            breweryDiv.append(breweryName, breweryAddress, breweryCity, breweryNumber);
            containerDiv.appendChild(breweryDiv);
    }
}

function goHome() {
    window.location.href = "../index.html";
}

backBtn.addEventListener("click", goHome);

retrieveStorageCity();