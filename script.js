function addContent(date) {
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    
    // Set the content for the new paragraph
    newParagraph.textContent = "This is a paragraph for " + date + ".";

    // Append the new paragraph to the container
    document.getElementById("contentContainer").appendChild(newParagraph);

    // Create a new image element
    var newImage = document.createElement("img");

    // Set the source for the new image
    newImage.src = "path/to/your/image.jpg";
    newImage.alt = "Image for " + date;

    // Append the new image to the container
    document.getElementById("contentContainer").appendChild(newImage);
}
