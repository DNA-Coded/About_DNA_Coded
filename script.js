document.addEventListener('DOMContentLoaded', () => {
    
    // Threshold 0.3 means animation triggers when 30% of element is visible
    const observerOptions = {
        threshold: 0.3, 
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const cardWrapper = section.querySelector('.card-wrapper');
            
            if (entry.isIntersecting) {
                // Add active class
                section.classList.add('active'); 
                
                // For Character Cards
                if (cardWrapper) {
                    cardWrapper.classList.add('image-pop-out');
                }
            } else {
                // Optional: Remove active class to replay animation on scroll up
                section.classList.remove('active');
                
                if (cardWrapper) {
                    cardWrapper.classList.remove('image-pop-out');
                }
            }
        });
    }, observerOptions);

    // Observe Team Section
    const teamSection = document.getElementById('team-trigger');
    if(teamSection) observer.observe(teamSection);

    // Observe Character Sections
    const characterSections = document.querySelectorAll('.character-section');
    characterSections.forEach(section => {
        observer.observe(section);
    });
});