document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('toggleSearch');
    const sidebar = document.getElementById('searchSidebar');
  
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      sidebar.classList.toggle('open');
    });
  });
  