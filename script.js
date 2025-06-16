// Function to redirect to Nightsbridge
function redirectToNightsbridge() {
    // Replace with the actual Nightsbridge URL
    const nightsbridgeUrl = "https://nightsbridge.com"; // Update this URL
    
    // Optional: Show confirmation before redirect
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
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
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