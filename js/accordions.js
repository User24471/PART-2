const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const active = document.querySelector('.accordion-header.active');
      if (active && active !== header) {
        active.classList.remove('active');
        active.nextElementSibling.classList.remove('open');
        active.nextElementSibling.style.maxHeight = null;
      }

      header.classList.toggle('active');
      const content = header.nextElementSibling;

      if (header.classList.contains('active')) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.classList.remove('open');
        content.style.maxHeight = null;
      }
    });
  });