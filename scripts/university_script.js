"use strict";

let urlParams = new URLSearchParams(window.location.search);
let encodedString = urlParams.get("data");
let jsonString = decodeURIComponent(encodedString);
let uni = JSON.parse(jsonString);

let uniName = document.getElementsByClassName("uni-name");
for (let i = 0; i < uniName.length; i++) uniName[i].textContent = uni["name"];

let uniLocationTitle = document.getElementById("uniLocationTitle");
uniLocationTitle.textContent = uni["city"];

let uniLocationDetails = document.getElementById("uniLocationDetails");
uniLocationDetails.textContent =
    "Egypt, " + uni["city"] + ", " + uni["location"];

let visitLink = document.getElementById("visit");
visitLink.href = uni["website"];

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map).openPopup();
