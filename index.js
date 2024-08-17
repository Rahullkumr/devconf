const carouselElements = document.querySelectorAll(".splide");

  // Iterate through each carousel element
  carouselElements.forEach((carouselElement) => {
    // Initialize a new Splide instance for each carousel
    const splide = new Splide(carouselElement, {
      type: "loop",
      drag: true,
      autoWidth: true,
      gap: 30,
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: 1.5,
        pauseOnHover: true,
      },
    });

    // Mount the Splide instance
    splide.mount(window.splide.Extensions);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const stickyClass = 'sticky';

    const stickyOffset = header.offsetTop;

    function handleScroll() {
      if (window.scrollY > stickyOffset) {
        header.classList.add(stickyClass);
      } else {
        header.classList.remove(stickyClass);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });
