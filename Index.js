function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it´s not a transform.
    this.classList.remove('playing');
};

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.main__center-box[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running all together. 
    audio.currentTime = 0; // Rewind to the start.
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.main__center-box');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);