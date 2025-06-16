// Function to redirect to Nightsbridge
function redirectToNightsbridge() {
    const nightsbridgeUrl = "https://nightsbridge.com";
    
    if (confirm("You will be redirected to Nightsbridge. Continue?")) {
        window.open(nightsbridgeUrl, '_blank');
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if map container exists
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Initialize Mapbox map - Nieu-Bethesda coordinates
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [25.0295, -32.0808], // Nieu-Bethesda coordinates [longitude, latitude]
            zoom: 14
        });

        // Add navigation controls
        map.addControl(new mapboxgl.NavigationControl());

        // Add a marker for CompassView location
        const marker = new mapboxgl.Marker({
            color: '#879eab'
        })
        .setLngLat([25.0295, -32.0808]) // Nieu-Bethesda coordinates
        .addTo(map);

        // Add popup with address information
        const popup = new mapboxgl.Popup({
            closeOnClick: false,
            closeButton: false
        })
        .setLngLat([25.0295, -32.0808])
        .setHTML(`
            <div>
                <h3>CompassView</h3>
                <p><strong>Address:</strong><br>
                4 New Street<br>
                Nieu-Bethesda, 6286<br>
                South Africa</p>
                <p><strong>Phone:</strong> +27 0836575425</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=4+New+Street,+Nieu-Bethesda,+6286,+South+Africa" target="_blank" style="color: #879eab; text-decoration: none;">
                    Get Directions →
                </a>
            </div>
        `)
        .addTo(map);
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