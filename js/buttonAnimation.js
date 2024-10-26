if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
        return setTimeout(callback, 1000 / 60);
    };
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animatedButton');
    if (button) {
        let hue = 200;
        let saturation = 50;
        let lightness = 70;
        let direction = 1;
        function animateGradient() {
            lightness += 0.2 * direction;
            if (lightness >= 85 || lightness <= 55) direction *= -1;
            button.style.setProperty('--myColor1', `hsl(${hue}, ${saturation}%, ${lightness}%)`);
            button.style.setProperty('--myColor2', `hsl(${hue}, ${saturation}%, ${lightness - 10}%)`);
            requestAnimationFrame(animateGradient);
        }
        animateGradient();
    } else {
        console.error("Error");
    }
});