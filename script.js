const progressBar = document.querySelector('#progressBar');
const chapters = [...document.querySelectorAll('.chapter')];
const railLinks = [...document.querySelectorAll('.rail-link')];

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = chapters.indexOf(entry.target);
    railLinks.forEach((link, linkIndex) => link.classList.toggle('active', linkIndex === index));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

chapters.forEach((chapter) => observer.observe(chapter));
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
