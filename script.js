window.onload = function() {
    init();

    const carousel = document.querySelector('.carousel');
    let carouselItems = document.querySelectorAll('.carousel div');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function() {
        // Disable the buttons
        prevBtn.disabled = true;
        nextBtn.disabled = true;

        // Move the last item to the beginning
        const lastItem = carouselItems[carouselItems.length - 1];
        carousel.prepend(lastItem);

        // Update the carouselItems NodeList
        carouselItems = document.querySelectorAll('.carousel div');

        // Re-enable the buttons
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    });

    nextBtn.addEventListener('click', function() {
        // Disable the buttons
        prevBtn.disabled = true;
        nextBtn.disabled = true;

        // Move the first item to the end
        const firstItem = carouselItems[0];
        carousel.append(firstItem);

        // Update the carouselItems NodeList
        carouselItems = document.querySelectorAll('.carousel div');

        // Re-enable the buttons
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    });
}

function init() {
    const images = document.querySelectorAll('.container-showcase img');
    console.log('DOM loaded');
    images.forEach(img => {
        // Store the original width of each image
        img.dataset.originalWidth = getComputedStyle(img).width;
        img.addEventListener('mouseover', increaseSizeAndZIndex);
        img.addEventListener('mouseout', resetSizeAndZIndex);
    });
}

function increaseSizeAndZIndex() {
    this.style.zIndex = '1000';
    this.style.width = '20vw';
    console.log('increased z-index to 1000 and scaled up');
}

function resetSizeAndZIndex() {
    this.style.zIndex = '1';
    // Reset the width to the original value
    this.style.width = this.dataset.originalWidth;
    console.log('reset z-index to 1 and scaled down');
}