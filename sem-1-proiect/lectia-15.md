---
description: MySuperHeroApp - part 4
---

# Lecția 15

## Activitate 0 - Adăugarea mai multor supereroi

În lecțiile anterioare am creat și stilizat un supererou. Am stabilit structura paginii, am construit div-urile, am adăugat și stilizat conținutul. În continuare, urmați aceiași pași pentru a adăuga încă 2 supereroi.

Căutați pe net informații despre aceștia. Supereroii adăugați de noi sunt Cyclops și Doctor Strange, iar Jean Grey a fost prima adăugată.

{% hint style="info" %}
În realizarea celor doi noi supereroi, cel mai probabil veți da copy paste de la div-urile ce conțin informații despre Jean Grey. În acest caz, nu uitați să schimbați id-ul și clasa div-ului mare, care să conțină numele noilor eroi.

`<div class="hero jean" id="jean">` trebuie schimbat în `<div class="hero cyclops" id="cyclops">` pentru Cyclops și în `<div class="hero strange" id="strange">` pentru Doctor Strange.
{% endhint %}

{% hint style="info" %}
La acest pas, doar HTML ar trebui modificat, pentru a adăuga conținut nou. Atâta timp cât numiți clasele elementelor la fel \(și ar trebui numite la fel, pentru că au aceleași proprietăți cu cele deja scrise la primul supererou\), cei trei supereroi vor arăta la fel ca și stilizare și așezare, dar cu un conținut diferit.
{% endhint %}

{% hint style="danger" %}
După ce ați adăugat alți 2 supereroi, veți observa ca se suprapun, astfel că toți trei eroii se află în aceeași poziție pe pagina web. Acest lucru îl vom rezolva elegant în semestrul 2, când vom folosi JavaScript pentru a naviga, prin intermediul butoanelor, de la un erou la altul. Până atunci, introduceți următoarele linii de cod în CSS pentru a separa cele 3 div-uri **hero**.
{% endhint %}

```css
/* div-ul cu id-ul cyclops va avea o spațiere sus de 100 viewport height */
#cyclops {
  left: 15% !important;
  top: 100vh;
}

/* div-ul cu id-ul cyclops va avea o spațiere sus de 180 viewport height */
#strange {
  left: 15% !important;
  top: 180vh;
}
```

Rezultatul final este:

![](../.gitbook/assets/screencapture-file-users-poppy-desktop-myproject-index-html-2020-03-17-14_28_17.png)

{% hint style="danger" %}
Păstrați folderul și codul folosit pentru acest proiect. Vom continua semestrul următor să lucrăm pe baza lui.
{% endhint %}

![](../.gitbook/assets/logos-02.svg)

