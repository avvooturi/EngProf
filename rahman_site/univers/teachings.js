document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    // Add event listener to each course or thrust box
    const cards = document.querySelectorAll(".new_card-container");
    cards.forEach(card => {
      card.addEventListener("click", function () {
        const title = card.querySelector(".work_title").textContent;
        const description = "Description for " + title;
  
        // Set the modal title and description
        modalTitle.textContent = title;
        modalDescription.textContent = description;
  
        // Show the modal
        modal.style.display = "block";
      });
    });
  
    // Close the modal when the close button is clicked
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
    // Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  