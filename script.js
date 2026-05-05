const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const revealItems = document.querySelectorAll(".reveal");
const whatsappBtn = document.getElementById("whatsappBtn");
const leadForm = document.getElementById("leadForm");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

whatsappBtn.addEventListener("click", () => {
  window.open("https://wa.me/919829846885", "_blank");
});

leadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const destination = document.getElementById("destination").value;
  const message = document.getElementById("message").value;

  const text = `New Travel Inquiry - Blue Hawks

Name: ${name}
Phone: ${phone}
Email: ${email}
Destination: ${destination}
Message: ${message}`;

  const whatsappURL = `https://wa.me/919829846885?text=${encodeURIComponent(text)}`;
  const mailURL = `mailto:hello@blue-hawks.com?subject=${encodeURIComponent("New Travel Inquiry")}&body=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");

  setTimeout(() => {
    window.location.href = mailURL;
  }, 400);

  leadForm.reset();
});