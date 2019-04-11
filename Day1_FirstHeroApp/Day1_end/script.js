/*
  Hero 0 - Jean Grey
  Hero 1 - Cyclops
  Hero 2 - Doctor Strange
*/

let currentHero = 0;

let nextHero = function() {
  if (currentHero === 0) {
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("cyclops");
      document.getElementById(hero).classList.remove("jean");
    });
    currentHero = 1;
  } else if (currentHero === 1) {
    /*
      TODO 0: Solved
      Implementati trecerea de la al doilea erou la cel de-al treilea, care va avea loc
      la apasarea butonului sageata dreapta. Urmariti exemplul de mai sus.

      La final, nu uitati sa modificati variabila ce retine numarul eroului curent.

      Functia aceasta ar trebui apelata in HTML.
      Identifica butoanele din html care duc la eroul urmator (hint: au in clasa hero--btn).
      Pe butoanele respective apeleaza functia cu ajutorul atributlui onclick.
    */

    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("strange");
      document.getElementById(hero).classList.remove("cyclops");
    });
    currentHero = 2;
  }
    /* Bonus: Solved
      Implementati lista de eroi circulara (Doctor Strange -> Jean Grey)
    */
    else if (currentHero === 2) {
      ["jean", "cyclops", "strange"].forEach(function(hero) {
        document.getElementById(hero).classList.add("jean");
        document.getElementById(hero).classList.remove("strange");
      });
      currentHero = 0;
    }
};

let previousHero = function() {
  if (currentHero === 1) {

    /*
      Merge prin fiecare erou si adauga sau elimina o tranzitie
      definita in CSS, care determina noua sa pozitie pe ecran
      */
    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("jean");
      document.getElementById(hero).classList.remove("cyclops");
    });
    currentHero = 0;
  } else if (currentHero === 2) {
    /*
      TODO 1: Solved
      Implementati trecerea de la ultimul erou la cel de-al doilea, care va avea loc
      la apasarea butonului sageata stanga. Urmariti exemplul de mai sus.

      La final, nu uitati sa modificati variabila ce retine numarul eroului curent.

      Functia aceasta ar trebui apelata in HTML.
      Identifica butoanele din html care duc la eroul precedent (hint: au in clasa hero--btn).
      Pe butoanele respective apeleaza functia cu ajutorul atributlui onclick.
    */

    ["jean", "cyclops", "strange"].forEach(function(hero) {
      document.getElementById(hero).classList.add("cyclops");
      document.getElementById(hero).classList.remove("strange");
    });
    currentHero = 1;
  } 

    /* Bonus: Solved
      Implementati lista de eroi circulara (Doctor Strange <- Jean Grey)
    */
    else if (currentHero === 0) {
      ["jean", "cyclops", "strange"].forEach(function(hero) {
        document.getElementById(hero).classList.add("strange");
        document.getElementById(hero).classList.remove("jean");
      });
      currentHero = 2;
    }
};

/*
  Bonus: 
  1) Implementati lista de eroi circulara (Doctor Strange -> Jean Grey si Doctor Strange <- Jean Grey)
  Adaugati noul caz in functiile de mai sus, nextHero si previousHero.

  2) Adaugati in HTML link-ul (a href) de mers spre stanga pentru Jean Grey si cel de mers spre dreapta pentru
  Doctor Strange. Puteti urmari exemplul de la Cyclops, deoarece are deja ambele butoane.

  2) Adaugati in HTML atributul onclick noilor link-uri si ca valoare functia nextHero() 
  pentru clasa .next, respectiv previousHero() pentru clasa .previous pentru a obtine lista circulara.
*/

window.onkeydown = function(event) {
    if (event.keyCode == '37') { // left arrow
       previousHero();
    } else if (event.keyCode == '39') { // right arrow
       nextHero();
    }

}
