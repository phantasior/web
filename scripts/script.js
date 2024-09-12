(function() {
    window.addEventListener('load', function() {
        const p = document.createElement('span');
        const time = this.window.performance.timing.domContentLoadedEventEnd - this.window.performance.timing.navigationStart;
        p.textContent = `Page load time is: ${time / 1000}`;
        document.querySelector('.footer').appendChild(p);
    });

    const currentPage = window.location.pathname.split('/').pop();

    document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.nav__link').forEach(link => {
                console.log(link);
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('nav__link--active');
                }
            });
    });


})();