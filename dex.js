// Fonction pour afficher la table de multiplication d'un nombre
function afficherTableMultiplication(nombre) {
  // Vérifie si le nombre est valide
  if (isNaN(nombre)) {
    return;
  }

  // Affiche le titre de la table de multiplication
  document.body.innerHTML = `<h2>Table de multiplication de ${nombre}</h2><ul>`;
  
  // Boucle pour générer les lignes de la table de multiplication
  for (let i = 1; i <= 10; i++) {
    document.body.innerHTML += `<li>${nombre} x ${i} = ${nombre * i}</li>`;
  }
  
  // Ferme la liste HTML
  document.body.innerHTML += `</ul>`;
}

// Demander le nombre à l'utilisateur
const nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

// Appeler la fonction pour afficher la table de multiplication
afficherTableMultiplication(nombre);
