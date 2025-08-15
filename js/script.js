// --------------------
// Hero Slider
// --------------------
const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}
setInterval(showNextSlide, 5000); // slides every 5 seconds

// --------------------
// Toggle mobile menu
// --------------------
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
    mobileMenu.classList.toggle("active");

    // Change icon
    hamburger.textContent = mobileMenu.classList.contains("active") ? "×" : "☰";
}

// Close mobile menu when clicking any link
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});

// --------------------
// Toggle chatbot visibility
// --------------------
const chatbotButton = document.getElementById("chatbot-button");
const chatbot = document.getElementById("chatbot");

function toggleChat() {
    const isChatVisible = chatbot.style.display === "flex";

    // Show or hide chatbot
    chatbot.style.display = isChatVisible ? "none" : "flex";

    // Hide chatbot button when chat is open
    chatbotButton.style.display = isChatVisible ? "flex" : "none";

    // If mobile menu is open, close it
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        hamburger.textContent = "☰";
    }
}

// Event listeners for chatbot open/close
chatbotButton.addEventListener("click", toggleChat);
document.getElementById("chatbot-toggle-desktop").addEventListener("click", (e) => {
    e.preventDefault();
    toggleChat();
});
document.getElementById("chatbot-toggle-mobile").addEventListener("click", (e) => {
    e.preventDefault();
    toggleChat();
});

// --------------------
// Send message in chatbot
// --------------------
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

// --------------------
// Auto-hide mobile menu on desktop resize
// --------------------
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove("active");
        hamburger.textContent = "☰";
    }
});
