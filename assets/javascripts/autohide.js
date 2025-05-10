// Override scroll threshold (default is ~100)
document$.subscribe(() => {
  const header = document.querySelector('header.md-header');
  let lastScrollTop = 0;
  const threshold = 10; // set to lower value for quicker hide

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
      header.classList.add('md-header--hidden');
    } else {
      header.classList.remove('md-header--hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

