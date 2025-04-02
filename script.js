document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded and ready for interaction!");

    // Highlight nav links on hover
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textShadow = "0 0 5px #FFD700";
        });
        link.addEventListener("mouseout", () => {
            link.style.textShadow = "none";
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission (fake submission for demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Intersection Observer for In-View Animations
    const sections = document.querySelectorAll('.container, .about h2, .about-content img, .about .text, section h2');

    const observerOptions = {
        threshold: 0.3 // Trigger when 30% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Scroll-to-top button functionality
window.addEventListener("scroll", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (!scrollToTopBtn) return;

    if (window.scrollY > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function DownFunction() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}




document.addEventListener("DOMContentLoaded", function () {
    const aboutImg = document.querySelector(".about-img");

    if (aboutImg) {
        // Ensure the image stays visible and doesn't reset position
        aboutImg.classList.add("about-img-visible");

        // Add hover effect for the rotating shadow
        aboutImg.addEventListener("mouseenter", function () {
            aboutImg.classList.add("hover-effect");
        });

        aboutImg.addEventListener("mouseleave", function () {
            aboutImg.classList.remove("hover-effect");
        });
    }
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send the data to the server
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            console.log('Success:', data);
            this.reset(); // Reset the form
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        });
    });
