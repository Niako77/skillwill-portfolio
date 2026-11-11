/* ===== Mobile Navigation ===== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });

  // Close the menu after selecting a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    // Validate required fields
    if (!name || !email || !message) {
      showFeedback("Please fill in all fields.", "error");
      return;
    }

    // Validate name
    if (name.length < 2) {
      showFeedback("Name must contain at least 2 characters.", "error");
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      showFeedback("Please enter a valid email address.", "error");
      return;
    }

    // Validate message
    if (message.length < 10) {
      showFeedback("Message must contain at least 10 characters.", "error");
      return;
    }

    showFeedback(
      "Your message has been validated successfully! (Demo only)",
      "success",
    );

    contactForm.reset();
  });
}

function showFeedback(message, type) {
  if (!formFeedback) return;

  formFeedback.textContent = message;
  formFeedback.classList.remove("success", "error");
  formFeedback.classList.add(type);
}
