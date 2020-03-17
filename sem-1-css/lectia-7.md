---
description: 'Durată: 50'' | Cuvinte cheie: CSS, stilizare, clase'
---

# Lecția 8

## Activitatea 1 - Ce este CSS?

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector

**CSS \(Cascading Style Sheets\)** este un limbaj de stilizare aplicat documentelor scrise în HTML sau XML \(supertip pentru HTML\). Este unul din limbajele standard web, implementat în toate browserele moderne și, la fel ca și alte tehnologii specifice internetului, în continuă evoluție. Versiunea curentă este CSS3, împărțită în mai multe module adoptate treptat. 

{% hint style="info" %}
În caz ca nu sunteți siguri dacă anumite proprietăți sunt suportate de versiunea curentă a browser-ul vostru, puteți folosi [această pagină](https://caniuse.com/#search=css3) pentru a vă verifica.
{% endhint %}

### Pentru ce e folosit CSS-ul?

CSS este un limbaj care, deși nu poate fi numit un limbaj de programare, este destul de puternic pentru a adăuga majoritatea efectelor vizuale pe care le vedeți în browserele moderne, de la culori, spațiere și aliniere la tranziții și animații. Pe parcursul următoarelor lecții vom încerca să prezentăm o gamă destul de extinsă de funcționalități pentru a face toate cele menționate mai sus, și multe altele.

### Cum adăugăm CSS în proiectele noastre?

Există trei modalități de a adăuga CSS în proiectele noastre. 

* într-un fișier extern cu extensia `.css`: fișierul conține numai CSS și va fi adăugat prin eticheta `<link>` care poate fi inclusă în `<head>` sau în `<body>`, dar prin convenție o vom pune în head.
* în interiorul unei etichete HTML de tip `<style>`: aici scriem tot în CSS, ca și cum codul s-ar afla într-un fișier extern .css; vom vorbi imediat despre sintaxa CSS
* în atributul `style` al unui element HTML care poate fi stilizat: acesta se mai numește si CSS în line și afectează doar elementul pe care este adăugat în mod direct

{% hint style="warning" %}
În primele două modalități, CSS-ul va avea efect asupra tuturor elementelor specificate din pagina web. În ultimul caz, va avea efect doar asupra elementului în cadrul căruia este adăugat.
{% endhint %}

În blocul de cod următor puteți observa toate cele trei modalități:

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

## Activitatea 2 - Selectori si sintaxa CSS

Durată: 20' \| Metodă: prelegere \| Materiale: videoproiector

Ne amintim că în HTML, sintaxa unei etichete avea următoarea structură:

`<eticheta atribut1="valoare" atribut2="valoare"> Continut </eticheta>`

În CSS, structura este similară, însă sintaxa diferă astfel:

```css
selector {
    proprietate: valoare;
    proprietate: valoare;
}

/* Observați folosirea acoladelor în loc de semnele <> */
/* Caracterul : desparte proprietatea (atribut) de valoare, în locul egalului */
/* După fiecare atribut se pune ; */
```

### Ce este un selector?

Putem identifica elemente HTML prin mai multe metode în CSS, dintre care două sunt atribute specifice HTML: `id` și `class`.

Aceste două atribute HTML pot identifica orice element HTML din body \(inclusiv eticheta body\) și, deși pot fi folosite interschimbabil, există câteva reguli generale folosite în industrie:

* un `id` identifică unic un element, o clasă identifică mai multe elemente
* un element ar trebui să aibă maximum un singur id, dar poate avea mai multe clase
* id-urile sunt folosite pentru identificarea elementelor majoritar în logica JavaScript, iar clasele în interacții și stilizare în CSS și JS

### Exemple de selectori

În CSS, putem avea următoarele elemente drept selectori:

* orice etichetă HTML:
  * `body`: aplică formatarea pe toate elementele \(etichetele incluse în body\)
  * `p`: aplică formatarea pe toate paragrafele din pagina web, peste tot unde întâlnește eticheta`p`
  * `img, heading, button, td, tr, li, ol, ul, hr`: similar, aplică stilizarea pe toate elementele de acest tip
* un id:
  * elementul din HTML poate primi un identificator unic, ID, astfel:
  * `<p id="paragraf1"> Text </text>`
  * id-ul poate lua orice valoare text, dar în principiu e bine să folosiți nume sugestive pentru rolul acelui element
  * elementul din HTML va fi identificat prin ID-ul său în CSS prin semnul **\#**, astfel:

```css
/* Un selector de tip id începe cu caracterul diez și nu are spații */
#numeId {
    /* Proprietatea color seteaza culoarea textului
     * Între proprietate și culoare este necesar caracterul ":"
     * La finalul declariției se pune caracterul ";" */
    color: red;
}
```

* o clasă:
  * elementul din HTML poate primi un identificator unic, ID, astfel:
  * `<p class="paragraf1"> Text </text>`
  * clasa poate lua orice valoare text, dar în principiu e bine să folosiți nume sugestive pentru rolul acelui element
  * elementul din HTML va fi identificat prin ID-ul său în CSS prin semnul `.`, astfel:

```css
/* Un selector de tip clasa incepe cu caracterul punct si nu are spatii */
.numeClasa {
    color: #ff00ff;
}
```

## Activitatea 3 - Exemple de utilizare

Durată: 20' \| Metodă: prelegere \| Materiale: videoproiector

Să luam câteva exemple și să înțelegem cum funcționează selectorii:

```css
/* Stilizare asupra tuturor elementelor h1 si p din body */
h1, p {
    color: red; /* exemplu de regula = proprietatea color cu valoarea red */
    background-color: #0000FF;
    font-size: 13px;
}

/* stilizare doar asupra elementelor paragraf cu clasa "verde" */
/* elementele de alt tip diferit de paragraf, sau elementele paragraf fără clasă
sau cu o alta clasă nu vor fi afectate */
p.verde {
    color: green;
}


/* toate elementele cu clasa "large-text" vor fi afectate, indiferent de tip - 
pot fi paragrafe, heading-uri, liste etc */
.large-text {
    font-size: 30px;
}

/* Un exemplu mai elaborat: stilizare asupra elementelor cu clasa "clasa-1"
sau cu id-ul #idulMeu, dar si asupra tuturor div-urilor din cadrul oricarui 
paragraf din continutul paginii web */
.clasa-1, #idulMeu, p div {
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

{% hint style="info" %}
Sunt foarte multe proprități care pot fi setate pentru un element. Puteți căuta pe net proprietățile care nu sunt clare din exemplul de mai sus. Vom discuta despre acestea în lecțiile următoare. În general, nu trebuie să rețineți toate proprietățile, ci puteți să le căutați.
{% endhint %}

### Exemple selectori în acțiune

Să considerăm că avem următoarele etichete în HTML, identificate prin id-uri și clase.

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
      <div class="checkmark"></div>
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



