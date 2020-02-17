---
description: 'Durată: 50'' | Cuvinte cheie: CSS, stilizare, clase'
---

# Lecția 7

## Activitatea 1 - Ce este CSS?

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

CSS \(Cascading Style Sheets\) este un limbaj de stilizare aplicat documentelor scrise în HTML sau XML \(supertip pentru HTML\). Este unul din limbajele standard web, implementat în toate browserele moderne și, la fel ca și alte tehnologii specifice internetului, în continuă evoluție. Versiunea curentă este CSS3, împărțită în mai multe module adoptate treptat. Pentru a verifica compatibilitatea diferitor funcționalități cu browserele folosite, puteți folosi [această pagină](https://caniuse.com/#search=css3).

### Pentru ce e folosit?

CSS este un limbaj care, deși nu poate fi numit un limbaj de programare, este destul de puternic pentru a adăuga majoritatea efectelor vizuale pe care le vedeți în browserele moderne, de la culori, spațiere și aliniere la tranziții și animații. Pe parcursul următoarelor lecții vom încerca să prezentăm o gamă destul de extinsă de funcționalități pentru a face toate cele de mai sus și mai multe.

### Cum adăugăm CSS în proiectele noastre?

Există trei modalități de a adăuga CSS în proiectele noastre, mai exact: într-un fișier extern cu extensia `.css`, în interiorul unei etichete HTML de tip `style`, sau în atributul `style` al unui element HTML care poate fi stilizat. În blocul de cod următor puteți observa toate cele trei modalități:

```markup
<!DOCTYPE html>
<html>
<head>
  <title> Menu </title>
  <!-- Prima modalitate: un fișier extern cu extensia .css -->
  <link rel="stylesheet" type="text/css" href="style.css">
  
  <!-- A doua modalitate -->
  <style>
  body {
    background-color: linen;
  }
  </style>
</head>
<body>
  <!-- A treia modalitate -->
  <p style="color:red">Paragraf rosu</p>
</body>
</html>
```

## Activitatea 2 - Sintaxa CSS

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

Sintaxa CSS este formată, în primele două modalități, din diferite reguli, identificate printr unul sau mai mulți selectori și un bloc de declarații de forma proprietate-valoare. Exemple:

```css
/* Exemplu de comentariu CSS */

/* h1, p = selectori */
h1, p {
    color: red; /* exemplu de regula = proprietatea color cu valoarea red */
    background-color: #0000FF;
    font-size: 13px;
}

/* Un exemplu mai elaborat */
.clasa-1, #idulMeu, p > div {
    width: 500px;
    height: 240px;
    display: block;
    margin: 20px 30px;
    padding: 1em 2em 0 2em;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 20px;
    background: #ffffff url("background.png") no-repeat right top;
    color: #313131;
    box-shadow: 10px 10px 5px grey;
    opacity: 0.9;
    transform: rotate(20deg);
}
```

### Selectori CSS

Înainte de a vorbi de diferite proprietăți CSS, vom intra în amănunte asupra selectorilor css. Putem identifica elemente HTML prin mai multe metode în CSS, dintre care două sunt atribute specifice HTML: `id` și `class`.

Aceste două atribute HTML pot identifica orice element HTML din body \(inclusiv eticheta body\) și, deși pot fi folosite interschimbabil, există câteva reguli generale folosite în industrie:

* un `id` identifică unic un element, o clasă identifică mai multe elemente
* un element ar trebui să aibă maximum un singur id, dar poate avea mai multe clase
* id-urile sunt folosite pentru identificarea elementelor majoritar în logica JavaScript, iar clasele în interacții și stilizare în CSS și JS

### Exemple selectori în acțiune

Următoarele exemple pot fi testate

```markup
<p id="myFirstId"> Paragraf cu text roșu </p>
<p class="colorClass fontClass"> Paragraf cu text verde și font de 24px </p>
<div class="divClass">
    <p> Paragraf cu text galben </p>
    <p class="commonDivParagraph"> Paragraf cu text mov </p>
    <p class="specialDivParagraph"> Text gri, 20px </p>
    <div>
        <p class="specialDivParagraph"> Text galben, dar roșu când e hover. </p>
    <div>
    <div class="commonDivParagraph"> Paragraf cu text galben </div>
    <input type="text" value="High font size"/> 
    <label class="container">Checkbox
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
</div>
```

```css
/* Selector pentru id-ul myFirstId */
#myFirstId {
    color: red;
}

/* Selector pentru colorclass */
.colorClass {
    color: green;
}

/* Selector pentru divClass */
.divClass {
    color: yellow;
}

/* Acest paragraf copil al divClass are text de culoarea mov
 * Toate elementele cu aceasta clasă, copil al divClass au această culoare
 */
.divClass .commonDivParagraph {
    color: purple;
}

/* Toate elementele cu clasa commonDivParagraph dar nu sunt elemente div
 * au font-size 20px.
 *
 * Selectorul :not(X) selecteaza toate elementele care nu sunt X.
 */
.commonDivParagraph:not(div) {
    font-size: 20px;
}

/*
 * Doar copiii direcți ai divClass cu clasa specialDivParagraph au culoarea gri.
 * În blocul de mai sus, doar primul paragraf are text gri.
 * Acesta este efectul selectorului copil ">".
 */
.divClass > .specialDivParagraph {
    color: grey;
}

/* Selectorul :hover identifică starea elementului de care e atașat când
 * mouse-ul este deasupra lui. */
.specialDivParagraph:hover {
    color: red;
}

/* Selectorul universal, *, selectează toate elementele de pe pagină */
* {
    font-size: 11px;
}

/* Deși toate elementele au 11px, elementul cu această clasă are font de 24px */
.fontClass {
    font-size: 24px;
}

/* 
 * Toate elementele input de tip text au font-size 200px
 * Selectorul de atribut [atribut="valoare"] selecteaza toate elementele
 * care pentru atributul dat au valoarea atașată
 */
input[type="text"] {
    font-size: 200px;
}

/*
 * Selectorul :checked selectează doar acele elemente care au valoarea checked.
 * Aplicat elementului input, selectează doar elementele bifate.
 * 
 * Selectorul sibling "~" (simbolul tildă) selectează toate elementele de pe
 * același nivel cu clasa de dinaintea selectorului cu selectorul după selector.
 *
 * Regula de mai jos selectează toate elementele cu clasa .checkmark de pe
 * același nivel cu un input bifat copil al clasei .container
 */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
  width: 10px;
  height: 10px;
  display: block;
}
```

{% hint style="info" %}
Puteți observa că, deși primul paragraf din div nu este stilizat direct, este de culoare galbenă, la fel ca părintele său, **divClass**. Aceasta este una din proprietățile principale CSS \('**moștenirea**'\). Majoritatea declaraților de proprietăți sunt moștenite de elementele copil ale elementelor pe care sunt declarate.
{% endhint %}

### Proprietăți pentru CSS

Pentru CSS, există câteva proprietăți foarte importante care definesc limbajul pe care le vom menționa mai jos:

* **cascading**: în cei mai simpli temreni, ordinea contează: dacă există două reguli cu selectori identici dar declarații pentru aceleași proprietăți dar valori diferite, cele din blocul care apare mai târziu vor fi aplicate
* **specificitate**: dacă două reguli diferite se referă la acelaăi elemente, regula cu selectorul mai specific va fi aplicată
* **moștenire**: majoritatea proprietăților, dacă nu sunt setate, vor moșteni valorile setate pe elementele părinte, până la body. Există și proprietăți care sunt excepții de la regula aceasta. De asemenea, fiecare broser aplică setul său propriu de proprietăți asupra elementelor generale \(cum ar fi etichete ca `div`, `body` și `input`, în special `body`\), și, dacă nu sunt resetate în mod specific, sunt moștenite.

## Activitatea 3 - Proprietăți comune

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

În următorul bloc vom da exemple de proprietăți comune care sunt aplicate anumitor etichete. Recomandăm să le testați pe toate care nu vi se par triviale.

```css
.underlinedText {
    text-decoration: underline;
}

image {
    width: 200px;
    height: 120px;
}

/* Toate elementele div cu clasa .right vor fi aliniate la dreapa */
div.right {
    float: right;
    width: 200px;
    background: red;
}

div.textCenter {
    text-align: center;
}


/* Toate elemenele div cu clasa .aligned vor avea margini egale la
 * stânga și la dreapta */
div.aligned {
    width: 200px;
    margin: auto;
}
```



