// script.js
const gallery = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

// Open lightbox on click
gallery.forEach((item, i) => {
  item.addEventListener('click', () => {
    currentIndex = i;
    showLightbox();
  });
});

function showLightbox() {
  lightboxImg.src = gallery[currentIndex].querySelector('img').src;
  lightbox.classList.add('open');
}

// Close lightbox
closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

// Navigate
nextBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % gallery.length;
  showLightbox();
});
prevBtn.addEventListener('click', e => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  showLightbox();
});

// Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    gallery.forEach(item => {
      item.style.display =
        filter === 'all' || item.getAttribute('data-category') === filter
          ? 'block'
          : 'none';
    });
  });
});
