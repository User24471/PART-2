 // Highlight the current page's button
  const buttons = document.querySelectorAll('.nav-buttons button');
  const currentPage = window.location.pathname.split('/').pop(); // Get current filename

  buttons.forEach(button => {
    if (button.getAttribute('onclick').includes(currentPage)) {
      button.classList.add('active');
    }
  });