const nextBtn = function() {
  document.querySelector(".image-slide").classList.add('image-swap')
  document.querySelector(".testimonial-slide").classList.add('testimonial-swap')
}

const prevBtn = function() {
  document.querySelector(".image-slide").classList.remove('image-swap')
  document.querySelector(".testimonial-slide").classList.remove('testimonial-swap')
}