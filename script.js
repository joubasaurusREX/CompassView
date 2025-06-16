// Function to redirect to Nightsbridge
function redirectToNightsbridge() {
    const nightsbridgeUrl = "https://nightsbridge.com";
    
    if (confirm("You will be redirected to Nightsbridge. Continue?")) {
        window.open(nightsbridgeUrl, '_blank');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Account for fixed nav height
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Prevent zoom on double tap for iOS
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

var lastTouchEnd = 0;

// Optimize images for mobile
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = '#2c3e50';
    }
});

// Auto-redirect option (uncomment if you want automatic redirect after certain time)
// setTimeout(() => {
//     if (confirm("Would you like to visit Nightsbridge now?")) {
//         redirectToNightsbridge();
//     }
// }, 30000); // 30 seconds