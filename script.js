// Function to redirect to Nightsbridge booking platform
function redirectToNightsbridge() {
    const nightsbridgeUrl = "https://book.nightsbridge.com/26518";
    window.open(nightsbridgeUrl, '_blank');
}

// Function to open Google Maps
function openGoogleMaps() {
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=4+New+Street,+Nieu-Bethesda,+6286,+South+Africa";
    window.open(googleMapsUrl, '_blank');
}

// Create fallback static map
function createFallbackMap(container) {
    container.innerHTML = `
        <div style="
            width: 100%; 
            height: 100%; 
            background: linear-gradient(135deg, #879eab 0%, #a5b8c7 100%);
            display: flex; 
            align-items: center; 
            justify-content: center;
            cursor: pointer;
            border-radius: 10px;
            flex-direction: column;
            color: white;
            text-align: center;
            padding: 20px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        " onclick="openGoogleMaps()">
            <div style="font-size: 48px; margin-bottom: 15px;">📍</div>
            <h3 style="color: white; margin-bottom: 10px; font-size: 1.2rem;">CompassView Guesthouse</h3>
            <p style="margin-bottom: 8px; opacity: 0.9;">4 New Street<br>Nieu-Bethesda, 6286<br>South Africa</p>
            <div style="
                background: rgba(255,255,255,0.2); 
                padding: 8px 16px; 
                border-radius: 20px; 
                margin-top: 10px;
                font-size: 14px;
                border: 1px solid rgba(255,255,255,0.3);
            ">
                Click for directions
            </div>
        </div>
    `;
}

// Initialize everything when DOM is loaded - SINGLE EVENT LISTENER
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize map
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        console.log('Map container found, creating fallback map...');
        createFallbackMap(mapContainer);
    } else {
        console.error('Map container not found!');
    }

    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
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