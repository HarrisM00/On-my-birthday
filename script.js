function addParagraph() {
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    
    // Set the content for the new paragraph
    newParagraph.textContent = "This is a new paragraph.";

    // Append the new paragraph to the container
    document.getElementById("paragraphContainer").appendChild(newParagraph);
}
