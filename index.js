document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentTime = new Date().toUTCString();
    currentTimeElement.textContent =  currentTime
});
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});