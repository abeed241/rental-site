const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 5000); // slides every 5 seconds



// Toggle mobile menu
const hamburger = document.getElementById("hamburger")
function toggleMenu() {
  mobileMenu.classList.toggle("active");

  // Change icon
  if (mobileMenu.classList.contains("active")) {
    hamburger.textContent = "×";
  } else {
    hamburger.textContent = "☰";
  }
}

// Toggle chatbot visibility
function toggleChat() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "flex" : "none";
    if (mobileMenu.classList.contains("active")) {
  mobileMenu.classList.remove("active");
  hamburger.textContent = "☰";
}
}

// Send message in chatbot
function sendMessage() {
    const input = document.getElementById("user-input");
    const msg = input.value.trim();
    if (!msg) return;

    const messages = document.getElementById("chat-messages");
    messages.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
    input.value = "";

    setTimeout(() => {
        messages.innerHTML += `<div><strong>Bot:</strong> I'm just a demo! Real AI coming soon. 🚗</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 600);
}

// Chatbot toggles
document.getElementById("chatbot-toggle-desktop")?.addEventListener("click", function (e) {
    e.preventDefault();
    toggleChat();
});

document.getElementById("chatbot-toggle-mobile")?.addEventListener("click", function (e) {
    e.preventDefault();
    toggleChat();
});

// Auto-hide mobile menu on desktop resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        document.getElementById("mobileMenu").classList.remove("active");
    }
});