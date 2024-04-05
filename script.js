
// gang pasted

window.onload = init;

function init() {
    const images = document.querySelectorAll('.container-showcase img');
    console.log('DOM loaded');
    images.forEach(img => {
        img.addEventListener('mouseover', increaseZIndex);
        img.addEventListener('mouseout', resetZIndex);
    });
}

function increaseZIndex() {
    this.style.zIndex = '1000';
    console.log('increased z-index to 1000');
}

function resetZIndex() {
    this.style.zIndex = '1';
    console.log('reset z-index to 1');
}