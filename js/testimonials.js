const testimonialsOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://testimonialapi.toolcarton.com/api", testimonialsOptions)
  .then((response) => response.json())
  .then((response) => setTestimonials(response))
  .catch((err) => console.error(err));

const testimonialsContainer = document.getElementById("testimonialsContainer");
function setTestimonials(testimonials) {
  testimonials.length = 6;
  testimonials.forEach((testimonial) => {
    let { avatar, designation, message, name } = testimonial;

    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
    <img src=${avatar} alt="avatar" />
    <h3>${name}</h3>
    <span class="title">${designation}</span>
    <div class="rate">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
    </div>
    <p>
        ${message}
    </p>
    `;
    testimonialsContainer.append(div);
  });
}
