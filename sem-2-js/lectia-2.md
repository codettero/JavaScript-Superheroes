---
description: >-
  Durată: 50' | Cuvinte cheie: structuri decizionale, structuri repetitive,
  array-uri și operații pe array-uri
---

# Lecția 2

## Activitate 1 - Structuri decizionale

Durată: 10' \| Metodă: explicație \| Materiale: videoproiector

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

În exemplul de mai sus am văzut că nu se afișează nimic atunci când `isSnowing` este false, deoarece nu am definit acest scenariu. Îl putem adăuga cu ajutorul cuvântului cheie `else`.

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

În cazul unei structuri if-else în care fiecare ramură conține doar o operație, și anume o atribuire, către aceeași variabilă, putem să folosim operatorul ternar. Este o formă mai scurtă de a scrie if-else în acest caz, ocupă doar un rând, însă e mai greu de citit.

Structura acestei operații este: `conditie ? caz_adevărat : caz_fals;`

```javascript
// cu if-else
if (nota < 5) {
    rezultat = 'respins';
} else {
    rezultat = 'admis';
}

// cu operatorul ternar
rezultat = nota < 5 ? 'respins' : 'admis';
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

## Activitate 2 - Structuri repetitive

Durată: 10' \| Metodă: demonstrație, conversație, exercițiu \| Materiale: videoproiector

### For

Și structurile repetitive sunt asemănătoare cu C/C++. Structura for are următorul corp:

`for (inițializare; condiție; incrementare) { operații }`

După cum știți, acoladele sunt necesare dacă există mai multe operații de executat în cadrul forului. În cazul unei singure operații, nu e nevoie să fie adăugate. Noi le vom folosi în orice caz în cadrul acestor exemple.

{% hint style="success" %}
Prima etapă din for este inițializarea, adică valoarea de la care pleacă contorul. Următoarea este condiția de oprire \(condiție care, atunci când nu mai este indeplinită, oprește execuția repetițiilor. Ultima etapa este incrementarea \(sau decrementarea\), adică modificarea valorii contorului.
{% endhint %}

```javascript
for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// Ce va afisa codul de mai sus?
```

### While, do while

Instrucțiunea `for` este folosită, de obicei, atunci când se cunoaște numărul de execuții anterioare. Când nu știm acest lucru, putem folosi instrucțiunile `while` sau `do while`.

```javascript
while (x > 10) {
  console.log(x);
  x -= 15;
}

do {
  console.log(x);
  x -= 15;
} while (x > 10);
```

{% hint style="info" %}
Nu vom intra în prea multe detalii, deoarece aceste instrucțiuni se comportă la fel cu cele din C/C++.
{% endhint %}

{% hint style="info" %}
Puteți realiza transformări echivalente între cele trei structuri repetitive discutate. Pentru a obține aceeași funcționalitate, uneori e nevoie de operații în plus.
{% endhint %}

## Activitate 3 - Array-uri

Durată: 15' \| Metodă: prelegere \| Materiale: -

### Definiție

Un array este o structură de date folosită pentru a reține unul sau mai multe elemente în același timp. Spre deosebire de C/C++, array-urile în JavaScript permit elemente de tipuri diferite \(de exemplu, o listă cu un număr și un caracter\). Acest lucru ar da eroare în C/C++, unde toate elementele trebuie să fie de același tip.

### Creare

Elementele unui array se scriu între paranteze drepte `[ ]` și sunt separate prin virgulă.

```javascript
var culori = ["rosu", "verde", "gri"]; // un array cu 3 elemente de același tip, toate string
var numere = [0, true, 2.56, "trei"]; // un array cu 4 elemente de tipuri diferite
var empty = []; // un array gol

// Alt mod de declarare
var culori2 = new Array("rosu", "verde", "gri"); // ["rosu", "verde", "gri"]
var empty2 = new Array(); // [];
var empty2 = new Array(3); // [undefined, undefined, undefiened];
```

{% hint style="success" %}
Există o diferență între cele două moduri de declarare. Cele două se pot comporta la fel \(liniile 1 și 6 și liniile 3 și 7\). În cazul lui `new Array()`, putem specifica numărul de elemente \(linia 8\), creând un array cu n elemente, toate fiind **undefined**.
{% endhint %}

### Accesarea elementelor

Array-urile sunt indexate de la 0. Fiecare element are un index, de la 0 la numărul de elemente - 1, exact ca în C/C++.

```javascript
var culori = ["rosu", "verde", "gri"];
console.log(culori[0]); // rosu
console.log(culori[2]); // gri

culori[1] = "albastru";
console.log(culori[1]); // albastru
```

### Operații cu array-uri

Array-urile au multe operații predefinite:

`.length` -&gt; întoarce numărul de elemente

`.sort()` -&gt; sortează elementele din array în ordine crescătoare alfanumerică

`.pop()` -&gt; elimină ultimul element din array și îl întoarce; updatează lungimea array-ului, dar nu o întoarce

`.push()` -&gt; adaugă un element la finalul array-ului și întoarce lungimea noului array

`.reverse()` -&gt; inversează ordine elementelor din array

`.forEach()` -&gt; parcurge fiecare element dintr-un array

```javascript
var culori = ["rosu", "verde", "gri"];
console.log(culori.length); // 3

culori.pop(); // nu afișează nimic, dar întoarce "gri", ultimul element, care nu e salvat nicăieri
console.log(culori); // ["rosu", "verde"]

x = culori.pop(); // elimină din array și întoarce ultimul element, care e salvat în variabila x
console.log(x); // "verde"
console.log(culori); // ["rosu"]

culori.push("galben");
culori[culori.length] = "albastru"; // echivalent cu culori.push("albastru")
console.log(culori); // ["rosu", "galben", "albastru"];

culori.sort();
console.log(culori); // ["albastru", "galben", "rosu"];

culori.reverse();
console.log(culori); // ["rosu", "galben", "albastru"];

culori.forEach(function(elem) {
    console.log(elem); // printează fiecare element
});
```

{% hint style="warning" %}
Funcția sort ordonează crescător alfanumeric, adică dacă vrem să sortăm numerele de la 0 la 10, vom avea output-ul: \[0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9\] deoarece primul caracter luat în considerare pentru 10 este 1, care este mai mic decât 2. Pentru a sorta numerele corect, va trebui să definim propriul comparator despre care vom vorbi într-o altă lecție.
{% endhint %}

{% hint style="warning" %}
Putem adăuga elemente într-un array și specificând noua poziție, după cum am văzut pe linia 12. În acest fel, elementul adăugat nu trebuie să fie neapărat pe ultima poziție, dar aveți grijă, deoarece vor fi create și poziții intermediare și vor fi undefined. Exemplu:
{% endhint %}

```javascript
var numbers = [1, 3, -5, 10]
console.log(numbers.length); // 4

numbers[7] = 100;
console.log(numbers.length); // 8
console.log(numbers); // [1, 3, -5, 10, undefined, undefined, undefined, 100]
```

## Activitate 4 - Exerciții

Durată: 15' \| Metodă: exercițiu \| Materiale: -

{% hint style="success" %}
Pentru a testa următoarele exerciții, creați un fișier HTML \(.html\) și unul JavaScript \(.js\). Adăugați linkul fișierului .js la cel HTML. Este suficient să scrieți codul în JS, să deschideți fișierul HTML în browser și să dați refresh pentru fiecare rulare.

Rezultatele se vor vedea în consolă, care poate fi accesată dând click dreapta -&gt; Inspect -&gt; Console.
{% endhint %}

1. Creați o pagină .html și una .js în același fișier. Introduceți următorul cod în pagina .html pentru a crea o legătura la cea JS. Nu este nevoie să adăugați nimic în body. Eticheta `script` din head este cea care se ocupă de realizarea legăturii. Fișierul JS ar trebui să se numească "myscript.js", conform codului de mai jos. Dacă îl numiți altfel, aveți grijă să modificați în `<script>`.

```javascript
<html>
<head>
    <title> Practice </title>
    <script src="myscripts.js"></script>
</head>
<body>
</body>
</html>
```

2.  Alegeți două numere a și b și afișați rezultatul următoarelor operații:

* a ^ 2 + b
* \(a + b\) ^ 2
* \|b\| - \|a\|
* \(5a + 7b\) % 10
* a / b + b % a

{% hint style="success" %}
Puteți să alegeți diferite valori pentru a și b la fiecare rulare. Pentru a realiza acest lucru automat, folosiți funcțiile Math.rand\(\) si Math.floor\(\) care vă vor genera numere aleatorii la fiecare rulare. Cum? Un search pe Google vă va arăta răspunsul.
{% endhint %}

3. Creați un array cu 10 elemente alese de voi \(sau folosind rand\(\)\). Afișați suma elementelor array-ului. Calculați suma numerelor pare. Pentru fiecare număr pozitiv, adăugați la finalul array-ului opusul său și afișați rezultatul.

4. Scrieți rezolvarea următoarei probleme: În pauză se joacă 9 elevi. Aceștia formează 3 echipe în mod egal. Pentru a se împărți în echipe, se așează în ordinea numelor lor și primii 3 formează o echipă, următorii 3 a doua și tot așa. Afișați echipele. 

