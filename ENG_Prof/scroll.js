// Get all the items
const items = document.querySelectorAll('.movie, .game, .song');

// Get the modal
const modal = document.getElementById("myModal");

// Get the image in the modal
const modalImage = document.getElementById("modal-image");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Add an event listener to each item
items.forEach(item => {
    item.addEventListener('click', () => {
        // Get the description from the data-description attribute
        const description = item.getAttribute('data-description');

        // Get the image from the clicked item
        const image = item.querySelector('img').src;

        // Set the image in the modal
        modalImage.src = image;

        // Display the description in the modal
        document.getElementById('description').innerText = description;

        // Show the modal
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
            document.querySelector('.modal-content').style.transform = "scale(1)";
        }, 100);
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.opacity = "0";
    document.querySelector('.modal-content').style.transform = "scale(0)";
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        document.querySelector('.modal-content').style.transform = "scale(0)";
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
}
