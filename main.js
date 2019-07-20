/*
Écrire un programme qui affiche les nombres de 1 à 199. Mais pour les multiples de 3, afficher “Fizz” au lieu du nombre et pour les multiples de 5 afficher “Buzz”. Pour les nombres multiples de 3 et 5, afficher “FizzBuzz”.
*/


for (let i = 1; i < 200; i++) {
	if ((i % 3) === 0 && (i % 5) === 0) {
		console.log("FizzBuzz");
	} else if ((i % 3) === 0) {
		console.log("Fizz");
	} else if ((i % 5) === 0) {
		console.log("Buzz")
	} else {
		console.log(i);
	}
}