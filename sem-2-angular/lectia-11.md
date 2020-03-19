---
description: 'Durată: 50'' | Cuvinte cheie: componentă, typescript, binding'
---

# Lecția 11

## Starter

Deschideți în Gitpod proiectul la care lucrați și in terminal rulați comanda: `npm install -g @angular/cli`

## Activitatea 1 - Detaliile unui supereroi

Durată: 10' \| Metodă: prelegere \| Materiale: -

Acum că ne-am familiarizat cu felul în care funcționează o componentă, să începem să adăugăm detaliile corespunzătoare unui erou în componenta `HeroComponent`. Pentru aceasta trebuie mai întâi să ne gândim ce fel de informații am vrea să afișăm pentru un erou:

1. **Nume** - numele de scena al eroului \(de ex. Batman\)
2. **Alter ego** - adevarata identitate \(secretă\) a eroului \(de ex. Bruce Wayne\)
3. **Scurtă descriere** - o scurtă descriere a eroului și a superputerilor acestuia
4. **Imaginea eroului** - calea către o poză cu eroul
5. **Buton pentru chemarea eroului** - când apăsam acest buton, un mesaj va fi trimis să cheme eroul, și va afișa o alertă care să confirme acest lucru \(de ex. `'Batman a fost chemat'`\)

Pentru început, să concepem html-ul \(structura vizuală\) pentru componentă. Înlocuiți conținutul template-ului \(`hero.component.html`\) cu urmatorul mark-up:

```markup
<div class="hero">
  <!-- IMAGE -->
  <div class="photo">
    <img src="assets/batman.jpg">
  </div>
  <div class="details">
    <!-- NAME -->
    <span class="detail-title">Name</span>
    <p class="detail-text">Batman</p>
    <!-- ALTER EGO -->
    <span class="detail-title">Alter ego</span>
    <p class="detail-text">Bruce Wayne</p>
    <!-- DESCRIPTION -->
    <span class="detail-title">Description</span>
    <p class="detail-text">Bla bla despre Batman</p>
    <!-- BUTTON -->
    <button class="btn btn-xl btn-purple">CALL HERO</button>
  </div>
</div>
```

Rezultatul:



Deși avem toate informațiile necesare pe ecran, componenta nu arată foarte atrăgător din punct de vedere vizual. Observați faptul că fiecare element are aplicat pe el o clasă, pentru a le putea stiliza. Adăugați următorul cod CSS iî fișierul de stilizare al componentei \(`hero.component.css`\):

```css
.hero {
  min-width: 50vw;
  padding: 16px;
  margin: 16px 16px 64px 16px;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.photo {
  float: left;
  margin: 0 24px 8px 0;
}

.detail-title {
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
}

img {
  width: 270px;
  margin-right: 10px;
}

p {
  margin-top: 8px;
}
```

## Activitatea 2  - Modelul de date pentru un erou

Durată: 20' \| Metodă: prelegere \| Materiale: -

## Activitatea 3 - Binding pe proprietăți

Durată: 10' \| Metodă: prelegere \| Materiale: -

## Activitatea 4 - Exercițiu

Durată: 10' \| Metodă: prelegere \| Materiale: -



