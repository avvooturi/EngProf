document.querySelectorAll('#category-list a').forEach(categoryLink => {
    categoryLink.addEventListener('click', function (e) {
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      document.querySelectorAll('.blog-post').forEach(post => {
        if (filter === 'all' || post.getAttribute('data-category') === filter) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });