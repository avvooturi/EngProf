const container = document.querySelector(".movies-container");
const arrowLeft = document.querySelector("#left-button");
const arrowRight = document.querySelector("#right-button");
const movies = document.querySelectorAll(".movie");
let position = 0;

const movieWidth = movies[0].offsetWidth + 10; // 10 is the margin-right of each movie
const containerWidth = container.offsetWidth;
const maxScroll = container.scrollWidth - containerWidth;
let currentScroll = 0;

arrowLeft.addEventListener("click", function() {
  if (currentScroll > 0) {
    currentScroll -= movieWidth;
    container.scrollTo({
      left: currentScroll,
      behavior: "smooth"
    });
  } else {
    currentScroll = maxScroll;
    container.scrollTo({
      left: currentScroll,
      behavior: "smooth"
    });
  }
});

arrowRight.addEventListener("click", function() {
  if (currentScroll < maxScroll) {
    currentScroll += movieWidth;
    container.scrollTo({
      left: currentScroll,
      behavior: "smooth"
    });
  } else {
    currentScroll = 0;
    container.scrollTo({
      left: currentScroll,
      behavior: "smooth"
    });
  }
});

const gamesContainer = document.getElementById("games-container");
const leftButtonGames = document.getElementById("left-button-games");
const rightButtonGames = document.getElementById("right-button-games");
const games = document.querySelectorAll(".game");
let currentIndex = 0;
const maxIndex = games.length - 1;

function openPopup(content, description) {
    // Create a new div for the overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0'; // Start invisible
    overlay.style.transition = 'opacity 0.3s ease'; // Add transition

    // Create a new div for the popup
    const popup = document.createElement('div');
    popup.textContent = content + ': ' + description;
    popup.style.backgroundColor = 'gray';
    popup.style.padding = '40px 20px 20px 20px';
    popup.style.border = '1px solid black';
    popup.style.maxWidth = '80%';
    popup.style.maxHeight = '80%';
    popup.style.overflowY = 'auto';
    popup.style.borderRadius = '10px'
    popup.style.position = 'relative';

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.right = '10px';
    closeButton.style.top = '10px';
    closeButton.addEventListener('click', () => {
        overlay.style.opacity = '0'; // Fade out before removing
        setTimeout(() => document.body.removeChild(overlay), 300); // Wait for transition to finish
    });

    // Append the close button and the popup to the overlay
    popup.appendChild(closeButton);
    overlay.appendChild(popup);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Trigger a reflow to make the transition work
    void overlay.offsetWidth;

    // Fade in the overlay
    overlay.style.opacity = '1';
}

function showGame(index) {
  const gameWidth = games[0].offsetWidth + 10; // 10 is the margin-right of each game
  const containerWidth = gamesContainer.offsetWidth;
  const maxScroll = gamesContainer.scrollWidth - containerWidth;
  const currentScroll = index * gameWidth;
  gamesContainer.scrollTo({
    left: currentScroll,
    behavior: "smooth"
  });
  currentIndex = index;
}

leftButtonGames.addEventListener("click", () => {
  if (currentIndex > 0) {
    showGame(currentIndex - 1);
  } else {
    showGame(maxIndex);
  }
});

rightButtonGames.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    showGame(currentIndex + 1);
  } else {
    showGame(0);
  }
});

movies.forEach(movie => {
    movie.addEventListener('click', () => {
        const description = movie.getAttribute('data-description');
        openPopup(movie.querySelector('.movie-title').textContent, description);
    });
});

games.forEach(game => {
    game.addEventListener('click', () => {
        const description = game.getAttribute('data-description');
        openPopup(game.querySelector('.game-title').textContent, description);
    });
});
