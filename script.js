// Fonction pour gérer l'accordéon
document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-item button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const currentItem = this.parentNode;
        const content = currentItem.querySelector('.accordion-content');
  
        // Vérifier si le contenu est déjà affiché
        if (content.classList.contains('show')) {
          // Si oui, on le cache
          content.classList.remove('show');
          this.classList.remove('active');
        } else {
          // Sinon, on l'affiche
          content.classList.add('show');
          this.classList.add('active');
        }
      });
    });
  });
  document.querySelectorAll('.fixed-sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });