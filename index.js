const carouselElements = document.querySelectorAll('.splide')

// Iterate through each carousel element
carouselElements.forEach((carouselElement) => {
  // Initialize a new Splide instance for each carousel
  const splide = new Splide(carouselElement, {
    type: 'loop',
    drag: true,
    autoWidth: true,
    gap: 30,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1.5,
      pauseOnHover: true,
    },
  })

  // Mount the Splide instance
  splide.mount(window.splide.Extensions)
})

// Sticky header
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header')
  const stickyClass = 'sticky'

  const stickyOffset = header.offsetTop

  function handleScroll() {
    if (window.scrollY > stickyOffset) {
      header.classList.add(stickyClass)
    } else {
      header.classList.remove(stickyClass)
    }
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

// Smooth scroll and animation
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time * 1.0)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
ScrollTrigger.defaults({
  scroller: document.body,
})

const container = document.querySelector('.container')
console.log(container.offsetWidth)

function getScrollAmount() {
  let containerWidth = container.scrollWidth
  return -(containerWidth - window.innerWidth)
}

const tween = gsap.to(container, {
  x: getScrollAmount,
  duration: 0.5,
  ease: 'none',
})

ScrollTrigger.create({
  trigger: '.container-wrapper',
  start: 'top 0vh',
  end: () => `+=${getScrollAmount() * -1} center`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
})


document.addEventListener("DOMContentLoaded", () => {
  const firstSvg = document.getElementById("first-svg");
  const secondSvg = document.getElementById("second-svg");

  firstSvg.addEventListener("click", () => {
      // Hide the first SVG and show the second SVG
      firstSvg.style.display = "none";
      secondSvg.style.display = "block";
  });
  secondSvg.addEventListener("click", () => {
    // Hide the secong SVG and show the first SVG
    secondSvg.style.display = "none";
    firstSvg.style.display = "block";
});
});

