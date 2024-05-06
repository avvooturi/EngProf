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
