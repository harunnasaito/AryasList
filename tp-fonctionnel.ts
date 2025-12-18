
// Partie 1 — Fonctions pures et impures


export {};

let counter = 0;

// Exercice 1.1 — Fonction PURE

function add(a: number, b: number): number {
  return a + b;
}

// Exercice 1.2 — Fonction IMPURE

function increment(): number {
  counter++;
  return counter;
}

// Tests
console.log("=== Partie 1 — Fonction pure add ===");
console.log(add(5, 4));
console.log(add(8, 7));
console.log(add(9, 10));

console.log("\n=== Partie 1 — Fonction impure increment ===");
console.log(increment());
console.log(increment());
console.log(increment());

console.log("Pourquoi add est-elle prévisible ?");
console.log("Elle dépend uniquement de ses paramètres.");
console.log("Elle ne modifie aucun état externe.");
console.log("Les mêmes entrées donnent toujours le même résultat.");

console.log("");

console.log("Pourquoi increment ne l’est pas ?");
console.log("Elle dépend d’une variable globale.");
console.log("Elle modifie l’état du programme.");
console.log("Le résultat change à chaque appel.");




// Partie 2 — Immutabilité


// Exercice 2 — Mettre à jour sans muter

type Student = {
  name: string;
  grade: number;
};

const student: Student = { name: "Léo", grade: 14 };

// Fonction IMMUTABLE

function updateGrade(student: Student, newGrade: number): Student {
  return {
    ...student,
    grade: newGrade,
  };
}

// Tests
const updatedStudent = updateGrade(student, 18);

console.log("\n=== Partie 2 — Immutabilité ===");
console.log("Étudiant original :", student);
console.log("Nouvel étudiant :", updatedStudent);



// Partie 3 — Fonctions d’ordre supérieur


// Exercice 3 — Appliquer une fonction n fois

function applyNTimes(
    f: (x: number) => number,
    n: number,
    x: number
): number {
  let result = x;

  for (let i = 0; i < n; i++) {
    result = f(result);
  }

  return result;
}

// Exemple
const double = (x: number) => x * 2;

console.log("\n=== Partie 3 — Fonctions d’ordre supérieur ===");
console.log(applyNTimes(double, 3, 1)); // 8



// Partie 4 — map, filter, reduce


const numbers = [1, 2, 3, 4, 5, 6];

// Exercice 4.1 — filter + map + reduce (une seule ligne)
const result = numbers
    .filter(n => n % 2 === 0)     // garder les pairs
    .map(n => n * 2)             // multiplier par 2
    .reduce((acc, n) => acc + n, 0); // somme

console.log("\n=== Partie 4.1 — Filter / Map / Reduce ===");
console.log(result); // 24

// Exercice 4.2 — Fonctions pures sans boucle

// Somme
function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Moyenne (composition avec sum)
function average(numbers: number[]): number {
  return numbers.length === 0 ? 0 : sum(numbers) / numbers.length;
}

// Produit
function product(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc * n, 1);
}

console.log("\n=== Partie 4.2 — Fonctions pures ===");
console.log("Somme :", sum(numbers));
console.log("Moyenne :", average(numbers));
console.log("Produit :", product(numbers));



// Partie 5 — Autres fonctions de liste


type SimpleUser = {
  name: string;
  age: number;
};

const users: SimpleUser[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Exercice 5.1 — find
const firstAdult = users.find(user => user.age >= 18);
console.log("\n=== Partie 5.1 — find ===");
console.log("Premier majeur :", firstAdult);

// Exercice 5.2 — some / every
const hasMinor = users.some(user => user.age < 18);
const allAbove10 = users.every(user => user.age > 10);

console.log("\n=== Partie 5.2 — some / every ===");
console.log("Au moins un mineur :", hasMinor);
console.log("Tous > 10 ans :", allAbove10);

// Exercice 5.3 — includes
const userNames = users.map(user => user.name);

console.log("\n=== Partie 5.3 — includes ===");
console.log("Alice présente :", userNames.includes("Alice"));
console.log("Eve présente :", userNames.includes("Eve"));

// Exercice 5.4 — flatMap
const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap(user => user.hobbies);

console.log("\n=== Partie 5.4 — flatMap ===");
console.log("Tous les hobbies :", allHobbies);

// Exercice 5.5 — sort & slice (immutabilité)
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);

console.log("\n=== Partie 5.5 — sort & slice ===");
console.log("Utilisateurs triés :", sortedByAge);
console.log("Les 2 plus jeunes :", twoYoungest);
console.log("Liste originale :", users);



// Partie Cas concret (bonus)


type UserWithCountry = {
  name: string;
  age: number;
  country: string;
};

const data: UserWithCountry[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];

// 1. Filtrer les adultes français
const adultFrenchUsers = data.filter(
    user => user.age >= 18 && user.country === "France"
);

// 2. Extraire les noms
const adultFrenchNames = adultFrenchUsers.map(user => user.name);

// 3. Trier par âge décroissant (immutabilité)
const sortedByAgeDesc = [...adultFrenchUsers].sort(
    (a, b) => b.age - a.age
);

// 4. Calculer la moyenne d’âge
const averageAge =
    adultFrenchUsers.reduce((sum, user) => sum + user.age, 0) /
    adultFrenchUsers.length;

console.log("\n=== Partie Cas concret ( bonus) ===");
console.log(adultFrenchUsers);
console.log(adultFrenchNames);
console.log(sortedByAgeDesc);
console.log("Âge moyen :", averageAge);

console.log("\nLe fichier s’exécute correctement");

