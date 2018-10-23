import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'ngsh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Super Heroes';
  selectedHero: Hero;

  heroSelectedHandler(hero) {
    this.selectedHero = hero;
  }

  heroSavedHandler() {
    this.selectedHero = null;
  }
}
