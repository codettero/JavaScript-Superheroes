import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'ngsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input()
  hero: Hero;

  @Output()
  edit = new EventEmitter();


  callHero() {
    alert(`${this.hero.name} has been called!`);
  }

  editHero(heroId) {
    this.edit.emit(heroId);
  }


}
