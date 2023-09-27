// JavaScript to control the text animation
const animationText = document.querySelector('.animation-text');
const text = `"Unleash Your Creativity with DesignDoodle Editor\n – Where Every Stroke Tells a Story."`;

function animateText() {
    let index = 0;
    let isErasing = false;
    let displayText = '';

    function updateText() {
        animationText.textContent = displayText;
    }

    function frame() {
        if (isErasing) {
            displayText = text.slice(0, --index);
        } else {
            displayText = text.slice(0, ++index);
        }

        updateText();

        if (isErasing && index === 0) {
            isErasing = false;
            setTimeout(frame, 1000); // Pause before typing again
        } else if (!isErasing && index === text.length) {
            isErasing = true;
            setTimeout(frame, 1000); // Pause before erasing
        } else {
            setTimeout(frame, 50); // Typing/erasing speed
        }
    }

    frame();
}

// Start the animation when the page loads
window.onload = animateText;
