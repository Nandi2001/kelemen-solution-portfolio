const views = {
 detail: {src:'assets/vortex-detail.webp',alt:'Metal outlet and pipe connection inside the concrete chamber',caption:'Formed outlet, mounting plate and connection through the chamber wall.'},
 flow: {src:'assets/vortex-flow.mp4',poster:'assets/vortex-flow-poster.webp',caption:'Flow animation · use the playback controls to explore the study.'},
 video: {src:'assets/vortex-video.mp4',poster:'assets/vortex-video-poster.webp',caption:'Additional video from the vortex chamber project.'}
};
const stage = document.querySelector('#vortex-media');
const caption = document.querySelector('#vortex-caption');
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
 const view = views[button.dataset.view];
 stage.querySelector('video')?.pause();
 document.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed',String(item===button)));
 stage.replaceChildren();
 stage.classList.toggle('is-video',Boolean(view.poster));
 caption.replaceChildren(document.createTextNode(view.caption));
 if (view.poster) {
  const video = document.createElement('video');
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.poster = view.poster;
  video.setAttribute('aria-label',button.textContent);
  const source = document.createElement('source');
  source.src = view.src;
  source.type = 'video/mp4';
  video.append(source);
  const fallback = document.createElement('a');
  fallback.href = view.src;
  fallback.textContent = 'Open the video file';
  video.append(fallback);
  stage.append(video);
  const help = document.createElement('span');
  help.className = 'video-help';
  help.append('Playback trouble? ');
  const link = document.createElement('a');
  link.className = 'text-link';
  link.href = view.src;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Open MP4 in a new tab';
  help.append(link);
  caption.append(help);
  video.addEventListener('error',()=>{help.prepend('The video could not be loaded. ');},{once:true});
 } else {
  const image = document.createElement('img');
  image.src = view.src;
  image.alt = view.alt;
  const crop = document.createElement('div');
  crop.className = 'image-crop crop-vortex-detail';
  crop.append(image);
  stage.append(crop);
 }
}));
document.querySelectorAll('[data-year]').forEach(element=>element.textContent=new Date().getFullYear());

// Keep the long-page navigation compact and highlight the section in view.
if (document.body.classList.contains('scrolling-home')) {
 const sections = [...document.querySelectorAll('.scroll-section')];
 const navigation = [...document.querySelectorAll('nav[aria-label="Main navigation"] a')];
 let scheduled = false;
 function updateScrollNavigation() {
  const y = window.scrollY;
  if (y > 220) document.body.classList.add('is-scrolled');
  else if (y < 60) document.body.classList.remove('is-scrolled');
  const threshold = document.querySelector('.site-header').getBoundingClientRect().height + 130;
  let active = sections[0].id;
  for (const section of sections) if (section.getBoundingClientRect().top <= threshold) active = section.id;
  for (const link of navigation) {
   if (link.getAttribute('href') === '#' + active) link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  }
  scheduled = false;
 }
 window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateScrollNavigation); }
 }, {passive:true});
 window.addEventListener('resize',updateScrollNavigation);
 window.addEventListener('pageshow',updateScrollNavigation);
 updateScrollNavigation();
}

// Copy the displayed contact value, with feedback for mouse and keyboard users.
const copyAnnouncement = document.createElement('div');
copyAnnouncement.className = 'sr-only';
copyAnnouncement.setAttribute('role','status');
copyAnnouncement.setAttribute('aria-live','polite');
document.body.append(copyAnnouncement);
document.querySelectorAll('[data-copy]').forEach(button => {
 let resetCopy;
 const originalLabel = button.getAttribute('aria-label');
 button.addEventListener('click',async () => {
  const value = button.dataset.copy;
  const label = button.querySelector('span');
  try {
   if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
   else {
    const field = document.createElement('textarea');
    field.value = value;
    field.style.cssText = 'position:fixed;left:-9999px;top:0';
    field.setAttribute('readonly','');
    document.body.append(field);
    field.select();
    const success = document.execCommand('copy');
    field.remove();
    button.focus({preventScroll:true});
    if (!success) throw new Error('Copy unavailable');
   }
   clearTimeout(resetCopy);
   label.textContent = 'Copied';
   button.classList.add('is-copied');
   button.setAttribute('aria-label',originalLabel+' — copied');
   copyAnnouncement.textContent = value+' copied to clipboard.';
   resetCopy = setTimeout(() => {
    label.textContent = 'Copy';
    button.classList.remove('is-copied');
    button.setAttribute('aria-label',originalLabel);
   },2500);
  } catch {
   copyAnnouncement.textContent = 'Could not copy automatically. Select the contact detail to copy it.';
   label.textContent = 'Try again';
  }
 });
});
