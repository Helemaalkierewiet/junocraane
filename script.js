window.onload = init;

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