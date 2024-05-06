document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const scrollOptions = {
                    top: offset,
                    behavior: 'smooth', 
                    duration: 1000 
                };
                
                window.scrollTo(scrollOptions);
            }
        });
    });
});
