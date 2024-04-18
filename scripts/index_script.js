"use strict";

function displayUnis(unis) {
    for (let i = 0; i < unis.length; i++) {
        let jsonString = JSON.stringify(unis[i]);
        let encodedString = encodeURIComponent(jsonString);
        // Create the main div
        let mainDiv = document.createElement("div");
        mainDiv.className = "col";

        // Create the card div
        let cardDiv = document.createElement("div");
        cardDiv.className = "card border-dark mb-3";
        cardDiv.style.maxWidth = "540px";

        // Create the row div
        let rowDiv = document.createElement("div");
        rowDiv.className = "row g-0";

        // Create the column div for the image
        let imgColDiv = document.createElement("div");
        imgColDiv.className = "col-md-4";

        // Create the anchor tag for the image
        let imgLink = document.createElement("a");
        imgLink.href = "university.html?data=" + encodedString;

        // Create the image
        let img = document.createElement("img");
        img.src = unis[i]["imgsrc"];
        img.className = "card-img-top rounded-4";
        img.alt = "...";

        // Append the image to the anchor tag
        imgLink.appendChild(img);

        // Append the anchor tag to the image column div
        imgColDiv.appendChild(imgLink);

        // Append the image column div to the row div
        rowDiv.appendChild(imgColDiv);

        // Create the column div for the card body
        let bodyColDiv = document.createElement("div");
        bodyColDiv.className = "col-md-8";

        // Create the card body div
        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

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

        // Create the row div for the text
        let textRowDiv = document.createElement("div");
        textRowDiv.className = "row align-items-start";

        // Create the column div for the text
        let textColDiv = document.createElement("div");
        textColDiv.className = "col";

        // Create the text
        let text = document.createElement("p");
        text.className = "card-text";
        text.textContent = unis[i]["city"];

        // Append the text to the text column div
        textColDiv.appendChild(text);

        // Append the text column div to the text row div
        textRowDiv.appendChild(textColDiv);

        // Append the text row div to the card body div
        cardBodyDiv.appendChild(textRowDiv);

        // Append the card body div to the body column div
        bodyColDiv.appendChild(cardBodyDiv);

        // Append the body column div to the row div
        rowDiv.appendChild(bodyColDiv);

        // Append the row div to the card div
        cardDiv.appendChild(rowDiv);

        // Append the card div to the main div
        mainDiv.appendChild(cardDiv);

        // Append the main div to the body or another container
        document.getElementById("RecommendedUnis").appendChild(mainDiv);
    }
}

let unis = [
    {
        name: "AUC (The American university in Cairo)",
        imgsrc: "https://picsum.photos/200/200",
        city: "Cairo",
        location: "New Cairo",
        website: "https://www.aucegypt.edu",
    },
    {
        name: "GUC (The German university in Cairo)",
        imgsrc: "https://picsum.photos/200/200",
        city: "Cairo",
        location: "New Cairo",
        website: "https://www.guc.edu.eg/",
    },
    {
        name: "Cairo university",
        imgsrc: "https://picsum.photos/200/200",
        city: "Giza",
        location: "Al Giza",
        website: "https://cu.edu.eg/Home",
    },
];

displayUnis(unis);
