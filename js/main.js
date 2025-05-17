document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navigation a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(0);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission (Mock)
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for reaching out! I will get back to you soon.");
            contactForm.reset();
        });
    }
});
