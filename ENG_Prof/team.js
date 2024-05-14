document.addEventListener('DOMContentLoaded', (event) => {
  // Select the container
  const container = document.querySelector('.container');

  // Select all the cards
  const cards = document.querySelectorAll('.leaderProfile');

  // Add a click event listener to the container
  container.addEventListener('click', () => {
    // Toggle the 'spread' class on all cards
    cards.forEach((card) => {
      card.classList.toggle('spread');
    });
  });
});

// Select all the boxes
var boxes = document.querySelectorAll('.leaderProfile');

// Add a click event listener to each box
boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    // Get the data-description attribute
    var description = this.getAttribute('data-description');

    // Create a new div element for the popup
    var popup = document.createElement('div');

    // Set the text of the popup to the description
    popup.textContent = description;

    // Add a class to the popup for styling
    popup.classList.add('popup');

    // Append the popup to the box
    this.appendChild(popup);

    // Remove the popup after 3 seconds
    setTimeout(function() {
      box.removeChild(popup);
    }, 3000);
  });
});

