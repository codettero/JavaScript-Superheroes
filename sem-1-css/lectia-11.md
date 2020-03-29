---
description: 'Durată: 50'' | Cuvinte cheie: tranziții, transformări, animații'
---

# Lecția 10

## Activitate 1 - Recapitulare

Durată: 5' \| Metodă: prelegere \| Materiale: videoproiector

1. Explicați diferența între conținut, padding, margin și border.
2. La ce se referă `3em`? Dar `65vh`? Dar `10vw`?
3. Ce stilizare puneți pe un paragraf dacă doriți ca textul să fie galben, îngroșat și subliniat. Dar ca textul să fie scris cu litere mari?
4. Ce efect are proprietatea float? Care sunt valorile pe care le poate lua?

## Activitate 2 Tranziții

Durată: 15' \| Metodă: prelegere \| Materiale: videoproiector

Tranzițiile CSS permit să schimbați în mod gradual valorile unor proprietăți, într-un timp specificat. Asta înseamnă că, dacă schimbați valoarea unei proprietăți a unui element, fie folosind JavaScript, fie folosind selectorul :hover \(mai multe despre hover mai jos\), schimbarea va fi, în mod default, instantă. Tranzițiile vă permit să treceți prin toate stările intermediare pentru a avea o schimbare fluidă.

În exemplele următoare vom trece de la o valoare la alta folosind selectorul `:hover`. Acesta specifică o stare a elementului selectat, aceea când te afli cu mouse-ul deasupra elementului. Browserul detectează când treci cu mouse-ul de pe un element pe altul și pornește acest eveniment. Acest moment va fi și începutul tranziției noastre.

```markup
<div class="my-element"></div>
```

```css
.my-element {
    background: #dddddd; /* Default background color */
    width: 200px;
    height: 200px;
    display: block;
}

.my-element:hover { /* Nu există spațiu între selectorul elementului și ":hover" */
    background: #cc0000; /* Background when hovering */
}
```

Codul de mai sus ar executa schimbarea backgroundului în mod instant, iar pentru culori atât de depărtate, ar fi non-estetic.

### Proprietăți pentru tranziții

O tranziție CSS poate fi scrisă fie folosind cele 4 proprietăți specifice, fie proprietatea prescurtată `transition`, după cum vedem mai jos.

```css
/* Exemplul 1 */
.my-element {
    background: #dddddd;
    width: 200px;
    height: 200px;
    display: block;
    transition-delay: .5s;
    transition-duration: 1.5s;
    transition-timing-function: ease-out;
    transition-property: background;
}

/* Exemplul 2, echivalent cu exemplul 1 */
.my-element {
    background: #dddddd;
    width: 200px;
    height: 200px;
    display: block;
    transition: background 1.5s ease-out .5s;
}
```

* **transition-delay**: opțional, specifică după câte secunde să înceapă tranziția
* **transition-duration**: specifică câte secunde să dureze tranziția
* **transition-property**: opțional, specifică ce pe proprietate să fie aplicată, default fiind `all`
* **transition-timing-function**: specifică ce fel de interpolare să fie folosită între cele două valori între care se face tranziția, câteva valori pe care le poate lua fiind: **linear**, **ease-in**, **ease-out**, **steps\(\)**, **cubic-bezier\(\)**. Pentru a vedea mai bine cum funcționează aceste timing functions, puteți să folosiți consola pentru a edita funcția de interpolare.

![](../.gitbook/assets/output.gif)

În exemplul de mai sus, putem vedea tranziția noastră \(care se întamplă când mouse-ul intră pe lement dar și când iese de pe el\) și cum putem edita in Firefox **transition-timing-function** și cum schimbă cum este realizată tranziția.

{% hint style="info" %}
Recomandăm călduros să experimentați cu tranziții direct în consolă.
{% endhint %}

Ca un ultim pas, putem specifica folosind proprietatea tranzition diferite tranziții pentru diferite proprietăți.

```css
.my-element {
    background: #dddddd;
    width: 200px;
    height: 200px;
    display: block;
    /* background-ul are o tranziție de 1s, iar lățimea de 2s */
    transition: background 1s, width 2s; 
}

.my-element:hover {
    background: #cc0000;
    width: 400px;
}
```

## Activitatea 3 Transformări

Durată: 10' \| Metodă: prelegere \| Materiale: videoproiector



