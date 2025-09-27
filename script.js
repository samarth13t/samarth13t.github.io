// Minimalist brutalist live clock for Pune
function updatePuneClock() {
  const clock = document.getElementById('pune-clock');
  if (!clock) return;
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const timeString = now.toLocaleTimeString('en-GB', options);
  clock.textContent = `Pune // ${timeString}`;
}
setInterval(updatePuneClock, 1000);
updatePuneClock();

// Theme toggle logic
const toggleSwitch = document.getElementById('mode-toggle');
const body = document.body;

function setMode(light) {
  if (light) {
    body.classList.add('light-mode');
    toggleSwitch.classList.add('active');
  } else {
    body.classList.remove('light-mode');
    toggleSwitch.classList.remove('active');
  }
}

const savedMode = localStorage.getItem('mode');
setMode(savedMode === 'light');

toggleSwitch.onclick = () => {
  const isLight = !body.classList.contains('light-mode');
  setMode(isLight);
  localStorage.setItem('mode', isLight ? 'light' : 'dark');
};
