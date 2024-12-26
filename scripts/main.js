// Add transitions while scrolling
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    
    elements.forEach((element, index) => {
        element.style.transitionDelaye = `${index * 0.2}s`;
        observer.observe(element);
    });
});

// UX manipulation upon scroll
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 100) 
    {
        navbar.classList.add('scrolled');
    }
    else 
    {
        navbar.classList.remove('scrolled');
    }
});

// Show nav bar button on smaller screens to enhance responsiveness
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const navMenuBtn = document.querySelector('.nav-menu-btn');

    navMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('menu-visible');
    });
});

// Toggle pricing 
document.addEventListener('DOMContentLoaded', () => {
    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');
    const price1 = document.getElementById('price1');
    const price2 = document.getElementById('price2');

    const monthlyPrices = ['$9.99/month', '$19.99/month', 'Custom Pricing'];
    const yearlyPrices = ['$99.99/year', '$199.99/year', 'Custom Pricing'];

    monthlyBtn.addEventListener('click', () => {
        price1.innerHTML = `${monthlyPrices[0]}`;
        price2.innerHTML = `${monthlyPrices[1]}`;
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
    });

    yearlyBtn.addEventListener('click', () => {
        price1.innerHTML = `${yearlyPrices[0]}`;
        price2.innerHTML = `${yearlyPrices[1]}`;

        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
    });
});
