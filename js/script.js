const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });



        // testimonial script;
     // testimonial   javascript-------------------------
        // This will work even when testimonials are loaded later
document.addEventListener('click', function(e) {
    // Check if click is on our read more button
    if (e.target && e.target.classList.contains('read-more-btn')) {
        const component = e.target.closest('.testimonials-container');
        const hiddenTestimonials = component.querySelector('.hidden-testimonials');
        const loadingIndicator = component.querySelector('.loading');
        
        const isExpanded = hiddenTestimonials.classList.contains('show');
        
        if (!isExpanded) {
            e.target.style.display = 'none';
            loadingIndicator.style.display = 'block';

            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                hiddenTestimonials.classList.add('show');
                e.target.textContent = 'Read Less Reviews';
                e.target.classList.add('secondary');
                e.target.style.display = 'block';
                hiddenTestimonials.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 800);
        } else {
            hiddenTestimonials.classList.remove('show');
            e.target.textContent = 'Read More Reviews';
            e.target.classList.remove('secondary');
        }
    }
});


        // ------------------------------------------------------------------------------------------------------------





    
  const video = document.getElementById('video');

  // Ensure video is paused by default
  video.pause();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.8) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  observer.observe(video);
const fs = require("fs"); const path = require("path");  function scan(dir) {   fs.readdirSync(dir).forEach(file => {     const full = path.join(dir, file);     if (fs.statSync(full).isDirectory()) {       scan(full);     } else if (file.endsWith(".html") || file.endsWith(".js")) {       let data = fs.readFileSync(full, "utf8");       const regex = /<img[^>]+src="([^"]+)"|<video[^>]+src="([^"]+)"/g;       let match;       while ((match = regex.exec(data))) {         console.log(full, " → ", match[1] || match[2]);       }     }   }); }  scan("./");
