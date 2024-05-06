window.onload = function() {
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

            // Show the image in the modal
            modalImage.style.display = "block";

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

    // Get all the buttons in the footer
    const buttons = document.querySelectorAll('.footer-content button');

    // Add an event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Set the description in the modal
            document.getElementById('description').innerText = "wow ok";

            // Hide the image in the modal
            modalImage.style.display = "none";

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
        // Hide the image in the modal
        modalImage.style.display = "none";

        modal.style.opacity = "0";
        document.querySelector('.modal-content').style.transform = "scale(0)";
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            // Hide the image in the modal
            modalImage.style.display = "none";

            modal.style.opacity = "0";
            document.querySelector('.modal-content').style.transform = "scale(0)";
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        }
    }

    // Get the buttons in the footer
    const emailButton = document.getElementById('email-button');
    const phoneButton = document.getElementById('phone-button');
    const addressButton = document.getElementById('address-button');

    // Add an event listener to each button
    emailButton.addEventListener('click', showPopup);
    phoneButton.addEventListener('click', showPopup);
    addressButton.addEventListener('click', showPopup);

    function showPopup() {
        // Set the description in the modal
        document.getElementById('description').innerText = "Info Added Here";

        // Hide the image in the modal
        modalImage.style.display = "none";

        // Show the modal
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
            document.querySelector('.modal-content').style.transform = "scale(1)";
        }, 100);
    }
}
