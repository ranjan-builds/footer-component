// footer.js

const footerHTML = `
<footer class="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0 text-center md:text-left">
        <h2 class="text-2xl font-bold text-white mb-1">Ranjan</h2>
        <p class="text-lg text-gray-400 mb-2">Full Stack Developer</p>
        <p class="max-w-md">Building digital solutions with passion and precision</p>
      </div>
      
      <div class="flex flex-col items-center md:items-end">
        <div class="flex space-x-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             class="footer-link github text-2xl hover:text-white">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
             class="footer-link twitter text-2xl hover:text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
             class="footer-link linkedin text-2xl hover:text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" 
             class="footer-link instagram text-2xl hover:text-white">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#" class="footer-link text-sm hover:text-white">Privacy Policy</a>
          <a href="#" class="footer-link text-sm hover:text-white">Terms of Service</a>
          <a href="mailto:your@email.com" class="footer-link text-sm hover:text-white">Contact</a>
        </div>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
      <p>&copy; <span id="year"></span> John Doe. All rights reserved. Built with passion and ☕</p>
    </div>
  </div>
</footer>
`;

const style = document.createElement('style');
style.textContent = `
.footer-link {
  transition: all 0.3s ease;
}
.footer-link:hover {
  transform: translateY(-3px);
}
.github:hover { color: #6e5494 !important; }
.twitter:hover { color: #1DA1F2 !important; }
.linkedin:hover { color: #0A66C2 !important; }
.instagram:hover { color: #E1306C !important; }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = footerHTML;
  document.body.appendChild(wrapper);

  document.getElementById('year').textContent = new Date().getFullYear();
});
