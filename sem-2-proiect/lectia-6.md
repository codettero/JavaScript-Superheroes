# Lecția 6

În continuare, vom adăuga funcționalitate butoanelor pentru a naviga de la un supererou la celalalt. Vom scrie codul în fișierul script.js.

## Pasul 1 - Aranjarea eroilor

Începem prin a comenta codul de mai jos din fișierul CSS. Era folosit pentru a vedea toți supereroii pe pagină în același timp, fără să se suprapună. De îndată ce implementăm funcțiile aferente butoanelor, vom putea nagiva între supereroi și aceștia nu vor mai fi afisați unul peste celălalt, ci câte unul pe ecran la un moment dat.

```css
#cyclops {
  left: 15% !important;
  top: 100vh;
}

#strange {
  left: 15% !important;
  top: 180vh;
}
```

Vom adăuga, în schimb, următorul cod CSS, pentru a stabili pozițiile supereroilor.

```css
/* elementul cu id-ul jean și clasa jean */
#jean.jean {
  left: 15%;
}

/* elementul cu id-ul cyclops și clasa jean */
#cyclops.jean {
  left: 115%;
}

#strange.jean {
  left: 215%;
}

#jean.cyclops {
  left: -85%;
}

#cyclops.cyclops {
  left: 15%;
}

#strange.cyclops {
  left: 115%;
}

#jean.strange {
  left: -185%;
}

#cyclops.strange {
  left: -85%;
}

#strange.strange {
  left: 15%;
}
```

#### Explicație

Avem nevoie de atâtea poziții pentru a îi spune fiecărui supererou unde să fie poziționat atunci când alt supererou este în prim plan \(pe ecran\). Vom vedea doar un erou la un moment dat, iar ceilalți doi nu sunt inexistenți, ci sunt poziționați în afara ecranului.

Citim identificatorii de mai sus astfel:

**\#jean.strange** =&gt; unde se află eroul Jean atunci când Strange este în prim plan, ca valoare avem -185% adică în partea stângă a ecranului, ieșit din ecran

**\#cyclops.cyclops** =&gt; unde se află eroul Cyclops atunci când Cyclops este în prim plan, ca valoare avem 15%, adică în centrul ecranului \(cum am explicat mai demult, lățimea div-ului eroului e de 70% din dimensiunea ecranului, deci o margine de 15% stânga și 15% dreapta îl va centra\).

![](../.gitbook/assets/frame-1-2.png)

## Pasul 2 - Setarea primului erou

În prezent, iar vedem eroii suprapuși. Pentru a rezolva acest lucru, trebuie să setăm care să fie primul erou. Avem de adăugat clasa `jean` la fiecare dintre cele trei div-uri care reprezintă un supererou, astfel:

```css
<div class="hero jean" id="jean">
    ...
</div>

<div class="hero jean" id="cyclops">
    ...
</div>

<div class="hero jean" id="strange">
    ...
</div>
```

{% hint style="info" %}
Supereroii nu mai sunt suprapuși, deoarece acum div-ul unui erou are și clasa jean, menționând care erou este în prim plan, deci cel văzut pe ecran la momentul inițial. Acest lucr se întâmplă datorită CSS-ului discutat la pasul 1.
{% endhint %}

În continuare, vom stabili convenția că fiecare supererou are un id care îl identifică, și anume: 0 - Jean Grey, 1 - Cyclops, 2 - Doctor Strange

## Pasul 3 - Funcția de next

Adăugați următoarea funcție în fișierul JS.

```javascript
let currentHero = 0; /* initial, Jean Grey este in prim plan */
let heroes = ["jean", "cyclops", "strange"];

let nextHero = function() {
  if (currentHero === 0) {
    heroes.forEach(function(hero) {
      document.getElementById(hero).classList.add("cyclops");
      document.getElementById(hero).classList.remove("jean");
    });
    currentHero = 1;
  } else if (currentHero === 1) {
    // de completat
  } else if (currentHero === 2) {
    // de completat
  }
};
```

Funcția verifică ce supererou este în prim plan \(cele 3 if-uri\) pentru a putea ști ce erou urmează. În interiprul fiecărui if avem un forEach care iterează printr-un array cu numele id-urile supereroilor folosiți și pentru fiecare, caută acel element în pagina HTML după id-ul dat \(folosind document.getElementById\) și îi adaugă clasa eroului următor și o elimină pe cea a eroului curent \(care nu va mai fi pe ecran\). Avem nevoie de această adăugare și eliminare de clasă întocmai pentru CSS-ul discutat la pasul 2, pentru că fiecare div cu un supererou își schimbă poziția în funcție de cine este în prim plan.

La final, se updatează noul erou în prim plan. Fără această linie, butonul de next nu ar funcționa mai mult de o dată.

Lista este circulară, mergând din Jean Grey în Cyclops, din Cyclops în Doctor Strange și din Doctor Strange iarași în Jean Grey.

Completați ultimele două if-uri pentru a obține o funcționalitate similară ca primul if.

## Pasul 4 - Funcția de previous

Creați funcția previousHero\(\) după modelul lui nextHero\(\) și adăugați-o în fișierul JS. Testați navigarea la eroul anterior.

## Pasul 5 - Control din butoane

```javascript
window.onkeydown = function(event) {
    if (event.keyCode == '37') { // left arrow
       
    } else if (event.keyCode == '39') { // right arrow
       
    }
}
```

Putem naviga între supereroi și prin intermediul butoanelor de la tastatură, adăugând codul de mai sus. Acesta este apelat automat în momentul în care o tastă este apăsată. Ne interesează tastele săgeată stânga și săgeată dreapta, așa că am inclus verificările acestora. Fiecare tasta are asignat un cod, iar lista întreagă o puteți găsi pe internet.

Pentru a funcționa, adăugați pe liniile 3 și 5 apeluri la funcțiile nextHero\(\) și previousHero\(\) și apoi testați navigarea din tastatură.

![](../.gitbook/assets/copy-of-logo-techtor-05.png)

