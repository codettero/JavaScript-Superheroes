# NgSuperHeroes

## 1. INTRO. THE HERO COMPONENT

#### 1.1 Open the project and explore the structure  
#### 1.2 Start the project -> navigate to the source code folder in your terminal and run `ng serve` and open the address `http://localhost:4200/` from your browser.  
#### 1.3 Create a hero component -> `ng generate component Hero`  
#### 1.4 Use the `hero-component` in `AppComponent`  
#### 1.5 Create a basic hero layout - static info (photo, name, alter ego, description, 'Call Hero' button, use predefined css and markup  
#### 1.6 Create the `Hero` model  
  * create the `Hero` class -> `ng generate class Hero`  
  * properties: `name`, `alterEgo`, `description`, `photo`  
  * import the `Hero` class in the `HeroComponent`
  * create a public property `hero` in the `HeroComponent`
  * assign it to a Hero property with the same props as in the interface  
  
#### 1.7 One-way binding to the hero property

  * interpolation ({{}}) for `name`, `description` and `alterEgo`
  * property binding for the `photo`
  * event binding for `Call Hero` button -> create a method in the component class and use the `(click)`
  * use the `uppercase` pipe for name

#### 1.8 Two-way binding to the hero name
  * add an input to the component
  * use `ngMode`l and two-way binding(`[()]`) to modify the hero name
  * notice error and add the `FormsModule` to the `AppModule`
  * after experimenting remove/comment the input code  
 

---------

## 2. THE HERO LIST

#### 2.1 Want to create a hero list -> duplicate the `<ngsh-hero>` in `AppComponent` -> see the same component -> how to change the details for the hero?  
#### 2.2 Create a HeroList component -> `ng generate component HeroList`  
  * use `<ngsh-hero-list>` in `AppComponent`
  * remove the `<ngsh-hero>` from `AppComponent` and add it to `HeroListComponent`
#### 2.3 Create a `heros` property in `HeroListComponent` and asign an array of hero objects to it (predefined array)  
#### 2.4 Make the `hero` property on `HeroComponent` an `@Input` -> remove old object  
#### 2.5 Make a list of heroes providing the `hero` input to `<ngsh-hero>` by using array indexes  
#### 2.6 introduce `*ngFor` to iterate the list (use the directive on a wrapping `<div>` -> so we can use `*ngIf` later)  
#### 2.7 Filter the list by hero universe  

  * add a `<select>` in the hero list with 3 options: `all`, `DC` and `Marvel`
  * add `universe` property to `Hero` class
  * add `universe` property to existing heros in the array
  * add a `selectedUniverse` property to the `HeroListComponent` and initialize it to `all`
  * add the `(change)` event to the `<select>` and add a method on the `HeroListComponent` -> `changeUniverse(newUniverse)` -> set the `selectedUniverse` property
  * introduce template refs (`#universe`) on `<select>` to send the value directly
  * add the `*ngIf` directive to show/hide heroes accordig to selected universe

#### 2.8 TODO: something with `ngStyle`/`ngClass`

-----------------
## 3. MASTER/DETAIL

#### 3.1 Add the `id` property to the `Hero` class -> uniquely identify the hero in the list
#### 3.2 Add id's to the objects in the `heros` array in `HeroListComponent` (eg, 1,2,3,4)
#### 3.3 Add an `Edit` button on the `Hero component`
  * create an `editHero` method and pass the `hero.id`
  * alert the `id`
#### 3.4 Introduce `@Output` event bindings
  * Create an `@Output` for the `HeroComponent` named `edit` and initialize it with a new `EventEmitter`
  * in the `editHero` method, emit the hero id
  * in the `HeroListComponent` add an event binding to a local function `editHandler`
  * in the method, save the incoming id in a `selectedHero` variable
  * show the variable in the screen
#### 3.5 Add the `HeroService` -> `ng generate service Hero`
  * add 2 properties `heros` and `selectedHero` from `HeroListComponent` to the `HeroService` and move the hero array to the service
  * create a `getHeroes()` method that return the hero list;
  * create a `getHero(id)` method that return a copy of the selected hero;
  * create a `saveHero(hero)` method that replaces the edited hero
#### 3.6 Use the `HeroService`
  * Import the `HeroService` in the `HeroListComponent` -> `import { HeroService } from '../hero.service';`
  * Inject the service in the `HeroListComponent` constructor -> `constructor(private heroService: HeroService) {}`

#### 3.7 Component Lifecycle hooks
  * import the `OnInit` interface in `HeroListComponent` -> `import { Component, OnInit } from '@angular/core';`
  * implement the interface -> `export class HeroListComponent implements OnInit {`
  * add the init lifecycle hook in the function -> `ngOnInit()` 
  * use the service to get the hero list: `this.heros = this.heroService.getHeroes();`

#### 3.8 Create the `EditHeroComponent` -> `ng generate component EditHero`
  * add `<ngsh-edit-hero>` to the `AppComponent` template
  * The `EditHeroComponent` has a hero as an `Input`
  * Add form elements for name, description, alter-ego and universe (dropdown) and wrap them in a `<form>`
  * Add `[(ngModel)]` bindings for the hero properties
  * Add a submit button and bind the `(ngSubmit)` event to a local function `onSubmit()`

#### 3.9 Getting the hero from the list to the Edit component
  * Add an `Output` named `heroSelected` in the `HeroListComponent` -> `@Output() heroSelected = new EventEmitter<Hero>();`
  * in the `editHandler` function emit the selected hero to the parent component -> use the service method to get the hero
  * change the `selectedHero` type from `number` to `Hero` and move it to the `AppComponent` -> this will now hold the selected hero
  * in the `AppComponent` add a method handle the hero select event: `heroSelectedHandler(hero)`
  * bind to the event in the template: `<ngsh-hero-list (heroSelected)="heroSelectedHandler($event)"></ngsh-hero-list>`
  * pass the `selectedHero` to the `ngsh-edit-hero` component -> `<ngsh-edit-hero [hero]="selectedHero"></ngsh-edit-hero>`
  * show/hide the edit component if hero is/is not present -> `*ngIf="selectedHero"`
#### 3.10 Save the hero
  * inject the `HeroService` service in the `EditHeroComponent` (same as for the `HeroListComponent`)
  * in the `onSubmit` function of the `EditHeroComponent` call the save method on the service with the hero as a paremater -> `this.heroService.saveHero(this.hero);`
  * create an `Output` for saving event: `@Output() heroSaved = new EventEmitter();` and emit onece the hero is saved -> `this.heroSaved.emit();`
  * in the `App component` create a method `saveHeroHandler` and bind to the heroSaved event of the `ngsh-edit-hero` -> `(heroSaved)="heroSavedHandler()"`
  * once the hero is saved, set the `selectedHero` property to null (in order to hide the edit component) -> `this.selectedHero = null;`
