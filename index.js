// Fonction pour afficher la table de multiplication
function afficherTableMultiplication(nombre) {
  console.log("Table de multiplication de " + nombre + " :");
  for (let i = 1; i <= 10; i++) {
      console.log(`${nombre} x ${i} = ${nombre * i}`);
  }
}

// Appel de la fonction avec le nombre choisi
let nombre = prompt("Entrez un nombre pour afficher sa table de multiplication :");
afficherTableMultiplication(parseInt(nombre));
