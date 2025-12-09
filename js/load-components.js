// loading navbar;
// document.addEventListener("DOMContentLoaded",()=>{
//   fetch("components/nav.html")
//   .then(res=>res.text())
//   .then(data=>{
//     document.getElementById("navbar-placeholder").innerHTML=data;
//   })
//   .catch(err=>console.error("failed to load navbar:",err))
// })


// loading banner ;
document.addEventListener("DOMContentLoaded", () => {
    fetch("components/banner.html")
      .then(res => res.text()) // ✅ Fixed parenthesis
      .then(data => {
        document.getElementById("banner-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Failed to load banner:", err));
  });
  








// loading testimonials
document.addEventListener("DOMContentLoaded", () => {
    fetch("components/testimonials.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("testimonial-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Failed to load testimonial:", err));
  });
  



// loading footer ;
document.addEventListener("DOMContentLoaded", () => {
    fetch("components/footer.html")
      .then(res => res.text()) // ✅ Fixed parenthesis
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error("Failed to load footer:", err));
  });
  


// loading product list
  fetch("html/product-list.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("product-list-placeholder").innerHTML = data;

      // Now add event listeners AFTER loading the HTML
      const container = document.getElementById("product-container");

      document.getElementById("leftArrow").addEventListener("click", () => {
          container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
      });

      document.getElementById("rightArrow").addEventListener("click", () => {
          container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      });
  });











    // Mobile Menu Toggle
    // const hamburger = document.querySelector('.hamburger');
    // const navLinks = document.querySelector('.nav-links');
    
    // hamburger.addEventListener('click', () => {
    //     navLinks.classList.toggle('active');
    // });
    
    // // Close menu when clicking on a link
    // document.querySelectorAll('.nav-links a').forEach(link => {
    //     link.addEventListener('click', () => {
    //         navLinks.classList.remove('active');
    //     });
    // });




    