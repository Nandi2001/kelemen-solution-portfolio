const gearboxVideo = document.querySelector('.gearbox-video');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function respectMotionPreference() {
  if (motionPreference.matches) {
    gearboxVideo.autoplay = false;
    gearboxVideo.pause();
  } else {
    gearboxVideo.autoplay = true;
    gearboxVideo.play().catch(() => {});
  }
}
if (gearboxVideo) {
  respectMotionPreference();
  motionPreference.addEventListener('change', respectMotionPreference);
}
