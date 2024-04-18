"use strict";

function displayUnis(unis) {
    for (let i = 0; i < unis.length; i++) {
        let jsonString = JSON.stringify(unis[i]);
        let encodedString = encodeURIComponent(jsonString);

        // Create the main div
        let mainDiv = document.createElement("div");
        mainDiv.className = "col d-flex justify-content-center";

        // Create the card div
        let cardDiv = document.createElement("div");
        cardDiv.className = "card shadow-lg rounded-4";

        // Create the anchor tag for the image
        let imgLink = document.createElement("a");
        imgLink.href = "university.html?data=" + encodedString;

        // Create the image
        let img = document.createElement("img");
        img.src = unis[i]["imgsrc"];
        img.className = "card-img-top rounded-top-4";
        img.alt = "...";

        // Append the image to the anchor tag
        imgLink.appendChild(img);

        // Append the anchor tag to the card div
        cardDiv.appendChild(imgLink);

        // Create the card body div
        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className =
            "card-body d-flex flex-column overflow-y-auto h-100";

        // Create the anchor tag for the title
        let titleLink = document.createElement("a");

        titleLink.href = "university.html?data=" + encodedString;
        titleLink.className =
            "link-offset-2 link-light link-underline link-underline-opacity-0 flex-grow-1";

        // Create the title
        let title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = unis[i]["name"];

        // Append the title to the title link
        titleLink.appendChild(title);

        // Append the title link to the card body div
        cardBodyDiv.appendChild(titleLink);

        // Create the row div
        let rowDiv = document.createElement("div");
        rowDiv.className = "row align-items-start";

        // Create the column div
        let colDiv = document.createElement("div");
        colDiv.className = "col";

        // Create the text
        let text = document.createElement("p");
        text.className = "card-text";
        text.textContent = unis[i]["city"];

        // Append the text to the column div
        colDiv.appendChild(text);

        // Append the column div to the row div
        rowDiv.appendChild(colDiv);

        // Append the row div to the card body div
        cardBodyDiv.appendChild(rowDiv);

        // Append the card body div to the card div
        cardDiv.appendChild(cardBodyDiv);

        // Append the card div to the main div
        mainDiv.appendChild(cardDiv);

        // Append the main div to the body or another container
        document.getElementsByClassName("row")[0].appendChild(mainDiv);
    }
}

let unis = [
    {
        name: "AUC (The American university in Cairo)",
        imgsrc: "https://picsum.photos/200/100",
        city: "Cairo",
        location: "New Cairo",
        website: "https://www.aucegypt.edu",
    },
    {
        name: "GUC (The German university in Cairo)",
        imgsrc: "https://picsum.photos/200/100",
        city: "Cairo",
        location: "New Cairo",
        website: "https://www.guc.edu.eg/",
    },
    {
        name: "Cairo university",
        imgsrc: "https://picsum.photos/200/100",
        city: "Giza",
        location: "Al Giza",
        website: "https://cu.edu.eg/Home",
    },
];

displayUnis(unis);
