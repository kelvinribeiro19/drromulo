document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links de navegação
    document.querySelectorAll('.scroll-to').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const purchaseForm = document.getElementById('purchase-form');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle the form submission
            // For now, we'll just show an alert
            alert('Obrigado pelo seu interesse! Em breve você receberá um e-mail com as instruções de pagamento.');
        });
    }

    // Add animation to CTA buttons on hover
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Video Player
    const playButton = document.querySelector('.play-button');
    const videoWrapper = document.querySelector('.video-wrapper');
    const iframe = videoWrapper.querySelector('iframe');

    if (playButton && iframe) {
        playButton.addEventListener('click', function() {
            // Add autoplay parameter to URL
            const videoSrc = iframe.src;
            if (videoSrc.includes('?')) {
                iframe.src = videoSrc + '&autoplay=1';
            } else {
                iframe.src = videoSrc + '?autoplay=1';
            }
            
            // Hide play button
            playButton.style.display = 'none';
        });
    }
});
