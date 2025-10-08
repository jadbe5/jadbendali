// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card, .project-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Add parallax effect to blur circles
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const circles = document.querySelectorAll('.blur-circle');
  circles.forEach((circle, index) => {
    const speed = 0.5 + (index * 0.2);
    circle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Project data with detailed information
const projectsData = [
  {
    title: 'Product Checker',
    description: 'Logiciel utilitaire pour de la gestion de produits en ligne. and real-time inventory management.',
    fullDescription: 'Permet de faire l\'inventaire des produits en stock et d\'en donner des informations (image, description, stock, fournisseur ...). Cette application facilite la gestion des produits en ligne, en offrant une interface conviviale, notamment pour les boutiques en ligne: idéal pour les petites entreprises et les entrepreneurs individuels.',
    tags: ['Python', 'Web scrapping', 'Google Sheets API', 'Shopify', 'Amazon/AliExpress/Alibaba'],
    features: [
      'Système de gestion de l\'inventaire en temps réel',
      'Intégration avec Google Sheets pour la gestion des données',
      'Recherche et filtrage avancés des produits',
      'Notification par email avant ruptures de stock',
      'Support multi-fournisseurs (Amazon, AliExpress, Alibaba) par web scraping',
      'Design intuitif avec PyQt5',
    ],
    technologies: [
      'Frontend: PyQt5, Canvas',
      'Backend: smtplib, beautifulsoup4, requests',
      'Database: Google Sheets API',
      'Payment: Shopify',
    ],
    images: [
      'assets/images/checker.png',
    ],
    link: 'https://example.com'
  },
  {
  title: "Cajaz Royale",
  description: "Battle Royale 2D post-apocalyptique (PvPvE) développé sur Unity en équipe de 5. Un monde ravagé où seuls les plus rusés survivent.",
  fullDescription: `Cajaz Royale est un jeu Battle Royale 2D mêlant PvP et PvE (Player vs Environment), développé en 10 mois par une équipe de 5 étudiants.
    Plongez dans un monde post-apocalyptique où la survie est une question de stratégie et de rapidité. Les joueurs sont lâchés sur une carte en ruines, où chaque recoin cache des ressources ou des ennemis IA hostiles.
    Affrontez jusqu'à 16 joueurs en ligne. Une centaine d'armes, armures et objets à découvrir implémentent un système de loot aléatoire, rendant chaque partie unique.
    Une carte générée procéduralement à chaque partie grâce à l'algorithme de Binary Space Partitioning garantit une rejouabilité infinie. 
  `,
  tags: [
    "C#",
    "Unity",
    "JSON",
    "Photon Network",
    "Pathfinding (A*)",
    "Binary Space Partitioning (BSP)",
    "Multijoueur",
    "Génération procédurale",
    "Post-apocalyptique",
    "Battle Royale",
    "PvPvE"
  ],
  features: [
    "Mode Battle Royale en ligne (jusqu'à 16 joueurs)",
    "Système de loot aléatoire (armes, armures, objets)",
    "IA ennemie avec Pathfinding et comportements dynamiques",
    "Génération procédurale des cartes (algorithme BSP)",
    "Mécaniques PvE (vagues d'ennemis, boss)",
    "Caméra dynamique et fluide (suivi du joueur)",
    "Gestion des données via JSON (personnalisation facile)",
    "Système de matchmaking et création de parties",
    "Design sonore immersif (musiques et effets)",
    "Interface utilisateur intuitive (menus, HUD)",
    "Optimisé pour PC (version mobile en développement)"
  ],
  technologies: [
    "Moteur: Unity 2D (C#)",
    "Réseau: Photon Network",
    "Données: Fichiers JSON (gestion des items et configurations)",
    "IA: Pathfinding (A*) et comportements basiques",
    "Génération procédurale: Binary Space Partitioning",
    "Versioning: Git/GitHub (collaboration d'équipe)",
    "Design: Aseprite (sprites) (animations 2D/pixel art)",
    "Build: Windows (PC)",
  ],
  images: [
    "assets/images/cajaz.png",
    "assets/images/gameplay_1.png",
    "assets/images/perso.png",
    "assets/images/astar.png",
    "assets/images/bat.png",
    "assets/images/bat2.png"
  ],
  link: "https://votre-lien-itch-io.itch.io/cajaz-royale",  // Remplacez par le lien réel
},
{
    title: 'Projet OCR',
    description: 'IA pour de la reconnaissance et la résolution de mots mêlés.',
    fullDescription: 'Application de reconnaissance optique de caractères (OCR) `from scratch` spécialisée dans la résolution de mots mêlés. En utilisant un réseau de neuronne, cette application traite et analyse des images de mots mêlés, identifie les lettres de la grille et des mots réponses et propose des solutions possibles.',
    tags: ['C', 'GTK', 'Réseaux de neurones', 'Binarisation'],
    features: [
      'Reconnaissance optique de caractères (OCR) pour les mots mêlés',
      'Interface utilisateur graphique avec GTK',
      'Réseau de neurones pour la reconnaissance des lettres',
      'Support pour différentes tailles et styles de mots mêlés',
      'Algorithme de résolution de mots mêlés',
    ],
    technologies: [
      'Frontend: GTK',
      'Backend: C, réseaux de neurones (implémentation from scratch)',
      'Image Processing: Binarisation, segmentation',
    ],
    images: [
      "assets/images/input.png",
      'assets/images/output_with_rectangles.png',
    ],
    link: 'https://example.com'
}

];

// Open project modal
function openProjectModal(projectIndex) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const project = projectsData[projectIndex];

  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <div class="project-meta">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <p class="description">${project.fullDescription}</p>

    <div class="project-images">
      ${project.images.map(img => `
        <div class="project-image">
          <img src="${img}" alt="${project.title}" />
        </div>
      `).join('')}
    </div>

    <h3>Key Features</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>

    <h3>Technologies Used</h3>
    <ul>
      ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>

    <a href="${project.link}" class="project-link-external" target="_blank">
      View Live Project
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});
