/*
  Hero 0 - Jean Grey
  Hero 1 - Cyclops
  Hero 2 - Doctor Strange
*/

let currentHero = 0;

let previousHero = function() {
  if (currentHero === 1) {

    /*
      Merge prin fiecare erou si adauga sau elimina o tranzitie 
      definita in CSS, care determina noua sa pozitie pe ecran
      */
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("firsthero");
      document.getElementById(hero).classList.remove("secondhero");
    });
    currentHero = 0;
  } else if (currentHero === 2) {

    /* 
      TODO 0:
      Implementati trecerea de la ultimul erou la cel de-al doilea, care va avea loc
      la apasarea butonului sageata stanga. Urmariti exemplul de mai sus.

      La final, nu uitati sa modificati variabila ce retine numarul eroului curent.
    */
    
  }
};

let nextHero = function() {
  if (currentHero === 0) {
    ["hero0", "hero1", "hero2"].forEach(function(hero) {
      document.getElementById(hero).classList.add("secondhero");
      document.getElementById(hero).classList.remove("firsthero");
    });
    currentHero = 1;
  } else if (currentHero === 1) {

    /* 
      TODO 1:
      Implementati trecerea de la al doilea erou la cel de-al treilea, care va avea loc
      la apasarea butonului sageata dreapta. Urmariti exemplul de mai sus.

      La final, nu uitati sa modificati variabila ce retine numarul eroului curent.
    */
  }
};

window.onload = function() {
  currentHero = 0;
  loadHero(currentHero);
}
