---
description: 'Durată: 15'' | Cuvinte cheie: *ngIf'
---

# Lecția 15

## Starter

Deschideți în Gitpod proiectul la care lucrați și în terminal rulați comanda: `npm install -g @angular/cli`

## Activitate 1 - Editarea eroului selectat

Durată: 15' \| Metodă: prelegere \| Materiale: -

Înainte să ne apucăm de scris cod, să încercăm să planificăm un pic ultima parte a task-ului de editare al eroului.

Primul lucru pe care vrem sa îl facem este să afișăm componenta doar atunci când user-ul a apasat pe unul din butoanele de edit, folosind directiva `*ngIf`. De asemenea am vrea să reținem și id-ul eroului care urmează să fie editat \(momentan doar îl afișăm într-o alertă\). Astfel, în `AppComponent` trebuie să creem o proprietate numită `selectedHeroForEdit` care va avea valoarea `undefined` când nu se editează niciun erou sau va lua valoarea id-ului eroului selectat pentru editare.

Așa cum arată implementarea în acest moment, componenta de listare și de editare sunt componente copil ale componentei `AppComponent`:

![](https://github.com/codettero/JavaScript-Superheroes/wiki/images/illustration_3_4.png)

Pentru început, în componenta `AppComponent` \(fișierul `app.component.ts`\), să creăm proprietatea `selectedHeroForEdit`

```javascript
export class AppComponent {
  selectedHeroForEdit: number; // proprietatea adaugata
}
```

În template-ul componentei \(fișierul `src/app/app.component.html`\) adăugăm directiva `*ngIf`cu valoarea proprietății pe care tocmai am creat-o, pe componenta `<jsh-edit-hero>`

```markup
<h2>Angular super heroes</h2>
<div class="heros-app">
  <jsh-hero-list></jsh-hero-list>
  <jsh-edit-hero *ngIf="selectedHeroForEdit"></jsh-edit-hero>
</div>
```

Dacă ne uităm acum în browser la aplicație, vom vedea că nu mai este afișată componenta de editare. Asta se datorează faptului că proprietatea `selectedHeroForEdit` nu este inițializată \(și deci are valoare `undefined`\) și astfel condiția din `*ngIf` se eveluează în `false`. Mai departe trebuie să și salvăm în `selectedHeroForEdit` valoarea eroului ce urmeaza a fi editat, pentru a afișa componenta de editare.

Mai întâi, trebuie să emitem valoarea eroului selectat din lista către componenta părinte. În clasa componentei de listare \(`hero-list.component.ts`\) adăugați o proprietate numită `heroSelected` pe care o decorăm cu `@Output()` și o inițializăm cu o instanță de `EventEmitter`. De asemenea trebuie să importăm noile obiecte folosite:

```javascript
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({...})
export class HeroListComponent implements OnInit {
  selectedUniverse: string;
  heros: Hero[];
  @Output() heroSelected = new EventEmitter(); // proprietatea adaugata

  ...
}
```

În continuare, în metoda `editHandler`, înlocuim alertarea cu emiterea id-ului pe evenimentul `heroSelected`:

```javascript
editHandler(id) {
  this.heroSelected.emit(id);
}
```

Acum putem intercepta evenimentul `heroSelected` în componenta `AppComponent`.

În clasa componentei `AppComponent` implementați o metodă numită `setEditHero` care primește ca parametru un id de erou și îl salvează pe proprietatea `selectedHeroForEdit`:

```javascript
setEditHero(heroId) {
  this.selectedHeroForEdit = heroId;
}
```

În template, adăugăm un binding la evenimentul `heroSelected` al elementului `<jsh-hero-list>` folosind funcția nou creata:

```markup
<h2>Angular super heroes</h2>
<div class="heros-app">
  <jsh-hero-list (heroSelected)="setEditHero($event)"></jsh-hero-list>
  <jsh-edit-hero *ngIf="selectedHeroForEdit"></jsh-edit-hero>
</div>
```

Și acum dacă rulăm aplicația în browser, vom observa că în momentul în care apăsăm butonul de editare pe eroi, componenta de editare va apărea deoarece acum în proprietatea `selectedHeroForEdit` avem păstrat id-ul eroului selectat, și astfel condiția din `*ngIf` se va evalua în `true`:

![](https://github.com/codettero/JavaScript-Superheroes/wiki/images/anim_3_1.gif)

De asemenea, dispariția componentei de editare nu a fost încă implementată. Ultimul pas este să trimitem id-ul eroului componentei de editare pentru a încărca datele eroului și a le modifica.

## Activitate 2 - Modificarea proprietăților

Durată: 20' \| Metodă: prelegere \| Materiale: -

Pentru a primi id-ul de la componenta părinte, în componenta de editare \(fișierul `edit-hero.component.ts`\) adăugăm o proprietate numită `heroId` pe care o decorăm cu `@Input`:

```javascript
import { Component, OnInit, Input } from '@angular/core';

@Component({...})
export class EditHeroComponent implements OnInit {
  @Input() heroId; // proprietate adaugata

  ...
}
```

Acum, în template-ul componentei `AppComponent` putem adăuga un binding între proprietatea `heroId` de pe `EditHeroComponent` și `selectedHeroForEdit`

```markup
<jsh-edit-hero 
  *ngIf="selectedHeroForEdit"
  [heroId]="selectedHeroForEdit"
></jsh-edit-hero>
```

Pentru a vedea ce id este transmis, putem să îl afișăm în template:

```markup
<div class="edit-hero">
  <h4>Edit hero {{heroId}}</h4>
  ...
</div>
```

Acum că avem id-ul eroului, trebuie să îl obținem din lista. Știm că id-ul identifică unic un erou și astfel nu trebuie decât să parcurgem lista și atunci când dăm peste un erou cu acel id, îl putem returna.

În clasa `HeroService` implementați o funcție numită `getHero` care primește ca parametru un id de erou și returnează eroul cu acel id din lista de eroi:

```javascript
export class HeroService {
  public heros: Hero[] = [...]

  ...
  // noua metoda adaugata
  getHero(heroId) {
    for (let i = 0; i < this.heros.length; i++) {
      if (this.heros[i].id === heroId) {
        return this.heros[i];
      }
    }
  }
}
```

Acum putem folosi această metodă în componenta `EditHeroComponent` pentru a obține eroul ce trebuie editat.

Mai întâi, în clasa componentei `EditHero` adăugați o proprietate `hero` de tip `Hero` care va stoca eroul ce urmează a fi editat:

```javascript
...
import { Hero } from '../hero'; // import adaugat

@Component({...})
export class EditHeroComponent implements OnInit {
  @Input() heroId;
  hero: Hero; // proprietate adaugata

  ...
}
```

Apoi, importați și injectați serviciul `HeroService` în componentă:

```javascript
import { HeroService } from '../hero.service'; // importul adaugat

@Component({...})
export class EditHeroComponent implements OnInit {
  ...
  // injectati serviciul HeroService
  constructor(private heroService: HeroService) { }

}
```

La final folosiți noua metodă `getHero` din serviciul `HeroService` oferind ca parametru proprietatea `heroId` și stocând rezultatul în proprietatea `hero`:

```javascript
ngOnInit() {
  this.hero = this.heroService.getHero(this.heroId); // obtinem eroul de editat
}
```

Pentru a face modificările pe erou, adăugați binding-uri de tipul `[(ngModel)]` pe inputurile corespunzatoare din template pentru proprietățile eroului \(liniile 8, 16, 24 și 32\):

```markup
<div class="edit-hero">
  <h4>Edit hero {{heroId}}</h4>
  <form>
    <label>name:
      <input 
        placeholder="Hero name" 
        name="name" 
        [(ngModel)]="hero.name"
      >
    </label>
    <br>
    <label>alter-ego:
      <input 
        placeholder="Hero alter-ego"
        name="alterEgo" 
        [(ngModel)]="hero.alterEgo"
      >
    </label>
    <br>
    <label>description:
      <textarea 
        placeholder="Hero description"
        name="description"
        [(ngModel)]="hero.description"
      ></textarea>
    </label>
    <br>
    <label>
      Hero Universe:
      <select 
        name="universe" 
        [(ngModel)]="hero.universe"
      >
        <option value="DC">DC</option>
        <option value="Marvel">Marvel</option>
      </select>
    </label>
    <br>
    <button type="submit" class="btn btn-xl btn-orange m-y-2">Save</button>
  </form>
</div>
```

Dacă rulați acum aplicația, veți observa că în momentul în care editați datele unui erou, acestea se modifică și în card-ul eroului modificat.

## Activitate 3 - Ascunderea componentei de editare

Durată: 10' \| Metodă: prelegere \| Materiale: -

Pentru a închide componenta de editare, trebuie să adăugăm un eveniment care să se declanșeze în momentul când dăm click pe butonul save. Deoarece editarea se face într-un element de tip `<form>` putem folosi evenimentul de submit. Adăugați următorul handler:

```markup
<div class="edit-hero">
  <h4>Edit hero</h4>
  <form (ngSubmit)="saveHero()"> <!-- handler-ul pe sumbit de form -->
  ...
```

În clasa componentei adăugați un `@Output` care să semnalizeze că a fost apăsat butonul de save:

```javascript
import { 
  Component,
  OnInit,
  Input,
  Output, // import adaugat
  EventEmitter // import adaugat
} from '@angular/core';

export class EditHeroComponent implements OnInit {
  @Input() heroId;
  @Output() close = new EventEmitter();
  ...
}
```

Apoi adăugați metoda `saveHero` care va emite evenimentul de `close`

```javascript
saveHero() {
  this.close.emit();
}
```

În componenta `AppComponent` adăugați o metodă `closeEdit` care va trece variabila `selectedHeroForEdit` pe `null` și astfel condiția din `*ngIf` de pe `jsh-edit-hero` va tranziționa pe `false` și va ascunde formularul de editare

```javascript
closeEdit() {
  this.selectedHeroForEdit = null;
}
```

Iar la final faceți un binding la evenimentul de `close`:

```javascript
<jsh-edit-hero
  *ngIf="selectedHeroForEdit"
  [heroId]="selectedHeroForEdit"
  (close)="closeEdit()"
></jsh-edit-hero>
```

Rezultatul final:

![](https://github.com/codettero/JavaScript-Superheroes/wiki/images/anim_3_2.gif)

## Activitate 4 - Exercițiu

Durată: 15' \| Metodă: prelegere \| Materiale: -

Adăugați în formularul de editare al unui supererou și un buton de cancel, lângă cel de save. Apăsarea butonului de cancel va anula modificările aduse \(pentru asta, ar trebui să faceți o copie a datelor unui erou de fiecare dată când începe editarea\) și va ascunde formularul de editare.

## Final

Nu uitați ca la finalul lecției să dați git add, git commit și git push pentru a updata proiectul cu noile modificări.

![](../.gitbook/assets/logos-02.svg)

