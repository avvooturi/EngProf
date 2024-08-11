document.addEventListener("DOMContentLoaded", function () {
    const closeModal = (modal) => {
        modal.style.display = "none";
    };

    // Undergraduate Courses modal elements
    const modalCourses = document.getElementById("modalCourses");
    const modalTitleCourses = document.getElementById("modal-title-courses");
    const modalDescriptionCourses = document.getElementById("modal-description-courses");
    const closeBtnCourses = modalCourses.getElementsByClassName("close")[0];

    // Current Thrusts modal elements
    const modalThrusts = document.getElementById("modalThrusts");
    const modalTitleThrusts = document.getElementById("modal-title-thrusts");
    const modalDescriptionThrusts = document.getElementById("modal-description-thrusts");
    const closeBtnThrusts = modalThrusts.getElementsByClassName("close")[0];

    // Function to open a modal with the correct content
    const openModal = (modal, titleElement, descriptionElement, title, description) => {
        titleElement.textContent = description;
        descriptionElement.textContent = description;
        modal.style.display = "block";
    };

    // Add event listener to each card
    const cards = document.querySelectorAll(".new_card-container");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = card.querySelector(".work_title").textContent;
            const description = card.getAttribute("data-description");

            // Determine which modal to open based on the card's position in the DOM
            if (card.closest("#undergraduate-courses")) {
                openModal(modalCourses, modalTitleCourses, modalDescriptionCourses, title, description);
            } else if (card.closest("#current-thrusts")) {
                openModal(modalThrusts, modalTitleThrusts, modalDescriptionThrusts, title, description);
            }
        });
    });

    // Close the modal when the close button is clicked
    closeBtnCourses.onclick = function () {
        closeModal(modalCourses);
    };

    closeBtnThrusts.onclick = function () {
        closeModal(modalThrusts);
    };

    // Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
        if (event.target == modalCourses) {
            closeModal(modalCourses);
        } else if (event.target == modalThrusts) {
            closeModal(modalThrusts);
        }
    };
});
