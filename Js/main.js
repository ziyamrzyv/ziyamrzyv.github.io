// Typing effect
const typeTarget = document.getElementById('type');
const text = "> IT Help Desk | Linux & Network Enthusiast | Future DevOps Engineer";
let i = 0;
function type() {
if (i <= text.length) {
typeTarget.textContent = text.slice(0, i);
i++;
setTimeout(type, 30);
}
}
type();


// Uptime
const ORIGIN = new Date('2025-06-01T00:00:00Z');
function formatDays(ms) {
const d = Math.floor(ms / (1000 * 60 * 60 * 24));
return d + ' days';
}
function updateUptime() {
const diff = Date.now() - ORIGIN.getTime();
const val = formatDays(diff);
document.getElementById('uptimeSide').textContent = val;
document.getElementById('uptimeFoot').textContent = val;
}
updateUptime();
setInterval(updateUptime, 60000);


// Theme toggle (dark/light)
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.classList.add(savedTheme);


function switchTheme() {
if (document.body.classList.contains('dark')) {
document.body.classList.replace('dark', 'light');
localStorage.setItem('theme', 'light');
} else {
document.body.classList.replace('light', 'dark');
localStorage.setItem('theme', 'dark');
}
}


themeToggle.addEventListener('click', switchTheme);


// Year footer
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;