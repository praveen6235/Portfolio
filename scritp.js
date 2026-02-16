
        VANTA.FOG({
            el: "#animated-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x5a2d9a,
            midtoneColor: 0x8925be,
            lowlightColor: 0x2d0c6e,
            baseColor: 0x120c24,
            blurFactor: 0.50,
            speed: 1.20,
            zoom: 0.80
        });
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            const closeMenu = () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            };
            
            mobileLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    closeMenu();
                });
            });
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const closeModalButton = document.getElementById('close-modal');
            const certificateItems = document.querySelectorAll('.certificate-item');

            certificateItems.forEach(item => {
                item.addEventListener('click', () => {
                    const fullSrc = item.getAttribute('data-full-src');
                    modalImg.src = fullSrc;
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                });
            });

            const closeModal = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                modalImg.src = ''; 
            };

            closeModalButton.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
            });
            const slideInElements = document.querySelectorAll('.slide-in');

            const slideInObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1 
            });

            slideInElements.forEach(el => {
                slideInObserver.observe(el);
            });

            const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            const mailto = `mailto:praveenbollam9550@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            )}`;

            window.location.href = mailto;
        });
    }
        });