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
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("leftScreen");
      document.getElementById(hero).classList.remove("mainScreen");
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
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("mainScreen");
      document.getElementById(hero).classList.remove("leftScreen");
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

/*
  TODO 2:
  Adaugati atributul onclick si ca valoare functia nextHero() linkurilor care au clasa
  .next, respectiv previousHero() celor cu clasa .previous.
*/

window.onkeydown = function(event) {
    if (event.keyCode == '37') { // left arrow
       previousHero();
    } else if (event.keyCode == '39') { // right arrow
       nextHero();
    }
}
