// Fonction optimisée avec affichage dans le document et validation de l'entrée
const afficherTableMultiplication = (nombre) => {
  if (isNaN(nombre)) {
      alert("Veuillez entrer un nombre valide.");
      return;
  }

  document.body.innerHTML = `<h2>Table de multiplication de ${nombre}</h2><ul>`;
  for (let i = 1; i <= 10; i++) {
      document.body.innerHTML += `<li>${nombre} x ${i} = ${nombre * i}</li>`;
  }
  document.body.innerHTML += `</ul>`;
}

// Demander le nombre à l'utilisateur
const nombre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
afficherTableMultiplication(nombre);
