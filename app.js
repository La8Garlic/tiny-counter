let count = 0;
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');

increaseBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
