---
description: >-
  Durată: 50' | Cuvinte cheie: structuri decizionale, structuri repetitive,
  array-uri și operații pe array-uri
---

# Lecția 2

## Activitate 1 - Recapitulare

Durată: 5' \| Metodă: prelegere \| Materiale: -

## Activitate 2 - Structuri decizionale

Durată: 10' \| Metodă: prelegere \| Materiale: -

### If

Exact ca în C/C++, structura decizională `if` ne permite să verificăm valoarea de adevăr a unei condiții și să executăm operații diferite în funcție de aceasta. Condiția din interiorul `if`-ului poate fi o variabilă booleană \(true/false\) sau o operație care poate fi evaluată la o variabilă booleană \(folosind operatorii =, &lt;, &gt;, &lt;=, &gt;=, != etc\).

Structura acestei operații este: `if (condiție) {caz_adevărat;}` Acoladele sunt necesare dacă se execută mai mult de două operații, și pot fi omise dacă se execută doar una. În cadrul acestor lectii, le vom folosi chiar dacă avem doar o operație de executat.

```javascript
isSnowing = true;
if (isSnowing) {
    console.log('Build a snowman');
}

// Ce va afișa codul de mai sus dacă isSnowing e true?
// Dar dacă e false?
```

### If else if

Dacă este îndeplinită condiția, prima ramură va fi executată \(adică operațiile scrise în interiorul acoladelor de la `if`\). Dacă nu este îndeplinită condiția, putem specifica ce să se efectueze pe cazul false.

În exemplul de mai sus am văzut că nu se afisează nimic atunci când `isSnowing` este false, deoarece nu am definit acest scenariu. Îl putem adăuga cu ajutorul cuvântului cheie `else`.

Structura acestei operații este: `if (condiție) {caz_adevărat;} else {caz_fals;}`

```javascript
isSnowing = false;
if (isSnowing) {
    console.log('Build a snowman');
} else {
    console.log('Hoping for snow');
}
```

În acest fel, putem înșirui multe astfel de operații if-else, în funcție de nevoile programului scris.

```javascript
if (age < 10) {
    console.log('Intrare gratuita');
} else if (age < 18) {
    console.log('Pret 50 lei');
} else {
    console.log('Pret 100 lei');
}

// Ce se afiseaza daca age este egal cu 17? Dar cu 18?
// Care e valoarea maxima a lui age pentru a se afisa 'Intrare gratuita'?
// Pentru ce valori ale lui age va fi executat a doua afișare? Dar a treia?
```

### Operator ternar

În cazul unei structuri if-else în care fiecare ramură conține doar o operație, și anume o atribuire, către aceeași variabilp, putem să folosim operatorul ternar. Este o formă mai scurtă de a scrie if-else în acest caz, ocupă doar un rând, însă e mai greu de citit.

Structura acestei operații este: \(conditie **?** caz\_adevărat **:** caz\_fals\);

```javascript
// cu if-else
if (nota < 5) {
    rezultat = 'respins';
} else {
    rezultat = 'admis';
}

// cu operatorul ternar
rezultat = (nota < 5 ? 'respins' : 'admis');
```

### Switch

Dacă avem nevoie de multe înșiruiri if-else-if, cel mai bine este să folosim un switch pentru claritatea codului.

```javascript
switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "No day found";
    break;
}

console.log(day);

// Ce se afișează dacă dayNumber este 5? Dar dacă este -2 sau 10?
```

{% hint style="info" %}
Cuvântul cheie break semnifică oprirea switch-ului atunci când a avut loc o potrivire. Dacă nu este adăugat, atunci programul va încerca să caute alte potriviri în condițiile de mai jos. Cuvântul cheie default reprezintă cazul care se execută dacă niciuna dintre condițiile de mai sus nu au fost îndeplinite. Nici break și nici default nu sunt obligatoriu de folosit în cadrul unui switch, ci depinde de funcționalitatea dorită.
{% endhint %}

## Activitate 3 - Structuri repetitive

Durată: 10' \| Metodă: prelegere \| Materiale: -

## Activitate 4 - Array-uri

Durată: 15' \| Metodă: prelegere \| Materiale: -

## Activitate 5 - Exerciții

Durată: 10' \| Metodă: prelegere \| Materiale: -



