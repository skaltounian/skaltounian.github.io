/** various scripts for the website */

function changeFooterBackground(colour) {
    const footer = document.getElementById("footer-content");
    footer.style.backgroundColor = colour; // set new colour
}


/** Script to insert content from fileName to a location by specified ID name */
function insertContentById(fileName, idName) {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
        document.getElementById(idName).innerHTML = data;
    });
}