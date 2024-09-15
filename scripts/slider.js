document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        'https://picsum.photos/id/1011/800/400',
        'https://picsum.photos/id/1012/800/400',
        'https://picsum.photos/id/1013/800/400',
        'https://picsum.photos/id/1015/800/400',
        'https://picsum.photos/id/1016/800/400'
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    imageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${url}" alt="Image">`;
        swiperWrapper.appendChild(slide);
    });

    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});
