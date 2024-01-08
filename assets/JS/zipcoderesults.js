const backBtn = document.getElementById("back-btn");
const containerDiv = document.getElementById("container");

function retrieveStorageZipcode() {
    // get brewery api data
    const breweryData = JSON.parse(localStorage.getItem("zipcodeBreweryData"));
    console.log(breweryData);

    // iterate through api array and print data to page
    for (let i = 0; i < breweryData.length; i++) {

        // print brewery name, address, city, and number
        const breweryDiv = document.createElement("div");
        const breweryName = document.createElement("h3");
        const breweryAddress = document.createElement("p");
        const breweryCity = document.createElement("p");
        const breweryNumber = document.createElement("a");

        // set styling for brewery div's
        breweryDiv.setAttribute("class", " ");

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
retrieveStorageZipcode();