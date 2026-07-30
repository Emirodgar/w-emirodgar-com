function getDate() {
	var d = new Date();
	var n = d.getFullYear();
	return n;
}

function getExperience() {
	return new Date().getFullYear() - 2007;
}


(function () {
  function initTestimonials() {
    const section = document.getElementById('section-testimonials');
    if (section && getComputedStyle(section).display === 'none') return;

    const track = document.getElementById('testiTrack');
    const dotsWrap = document.getElementById('testiDots');
    const prevBtn = document.querySelector('.testi-arrow-prev');
    const nextBtn = document.querySelector('.testi-arrow-next');

    if (!track || !dotsWrap || !prevBtn || !nextBtn) {
      console.error('Carrusel de testimonios: falta algún elemento en el DOM', { track, dotsWrap, prevBtn, nextBtn });
      return;
    }

    const slides = track.querySelectorAll('.testi-slide');

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir al testimonio ' + (i + 1));
      dot.addEventListener('click', () => {
        slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('.testi-dot');

    function updateActiveDot() {
      let closestIndex = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - track.scrollLeft);
        if (dist < closestDist) { closestDist = dist; closestIndex = i; }
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === closestIndex));
    }

    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveDot, 100);
    });

    function slideWidth() {
      return slides[0].getBoundingClientRect().width + 30;
    }
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -slideWidth(), behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: slideWidth(), behavior: 'smooth' }));

    let isDown = false, startX, scrollStart;
   track.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDown = true;
  track.classList.add('dragging');
  startX = e.pageX;
  scrollStart = track.scrollLeft;
});
    window.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = e.pageX - startX;
      track.scrollLeft = scrollStart - walk;
    });

    track.querySelectorAll('.testi-readmore').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const slide = link.closest('.testi-slide');
        slide.classList.add('expanded');
        link.remove();
      });
    });
  }

  function initNowSection() {
    const list = document.getElementById('nowList') || document.querySelector('.now-list');
    if (!list) return;

    list.querySelectorAll('.now-readmore').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const item = link.closest('.now-item');
        item.classList.add('expanded');
        link.remove();
      });
    });
  }

  function initProjectGallery() {
    const track = document.getElementById('pdGalleryTrack');
    const dotsWrap = document.getElementById('pdGalleryDots');
    const prevBtn = document.querySelector('.pd-gallery-arrow-prev');
    const nextBtn = document.querySelector('.pd-gallery-arrow-next');

    if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll('.pd-gallery-slide');
    if (!slides.length) return;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'pd-gallery-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir a la imagen ' + (i + 1));
      dot.addEventListener('click', () => {
        slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('.pd-gallery-dot');

    function updateActiveDot() {
      let closestIndex = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - track.scrollLeft);
        if (dist < closestDist) { closestDist = dist; closestIndex = i; }
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === closestIndex));
    }

    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveDot, 100);
    });

    function currentIndex() {
      let closestIndex = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - track.scrollLeft);
        if (dist < closestDist) { closestDist = dist; closestIndex = i; }
      });
      return closestIndex;
    }
    function goTo(index) {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      slides[clamped].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
    prevBtn.addEventListener('click', () => goTo(currentIndex() - 1));
    nextBtn.addEventListener('click', () => goTo(currentIndex() + 1));

    let isDown = false, startX, scrollStart;
    track.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDown = true;
      track.classList.add('dragging');
      startX = e.pageX;
      scrollStart = track.scrollLeft;
    });
    window.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('dragging');
    });
    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = e.pageX - startX;
      track.scrollLeft = scrollStart - walk;
    });
  }

  // Si el DOM ya está listo (p.ej. porque Rocket Loader difirió este script), inicializa ya.
  // Si no, espera al evento — cubre ambos casos sin depender de cuándo se ejecute realmente.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonials);
    document.addEventListener('DOMContentLoaded', initNowSection);
    document.addEventListener('DOMContentLoaded', initProjectGallery);
  } else {
    initTestimonials();
    initNowSection();
    initProjectGallery();
  }
})();

		
$(document).ready(function(){

	$('#side-panel-content').load('https://emirodgar.com/cdn/html/sidebar.html');
	
	$("#anno").html(getDate());
	$("#anno_experience").html(getExperience());
	
	/*
	$(".erg_protfolio").load('https://emirodgar.com/cdn/html/portfolio.html');
	$("#section-services-seo").load('https://emirodgar.com/cdn/html/services.html');
	
	$("#section-experience").load("https://emirodgar.com/cdn/html/experience.html", function() {
		$("#anno_experience").html(getExperience());
	});
	
	$("#section-why").load("https://emirodgar.com/cdn/html/why.html", function() {
		$("#anno_why").html(getDate());
	});
	
	$('#section-about-me').load('https://emirodgar.com/cdn/html/about.html');
	$('#section-reasons-seo').load('https://emirodgar.com/cdn/html/reasons-seo.html');
	
	*/

});
