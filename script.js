// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards and feature cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card, .feature-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })
})

// Add active state to floating WhatsApp button on scroll
let lastScroll = 0
const floatingBtn = document.querySelector(".floating-whatsapp")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 300) {
    floatingBtn.style.opacity = "1"
    floatingBtn.style.visibility = "visible"
  } else {
    floatingBtn.style.opacity = "0"
    floatingBtn.style.visibility = "hidden"
  }

  lastScroll = currentScroll
})

// Initialize floating button visibility
floatingBtn.style.transition = "all 0.3s ease"
if (window.pageYOffset <= 300) {
  floatingBtn.style.opacity = "0"
  floatingBtn.style.visibility = "hidden"
}
