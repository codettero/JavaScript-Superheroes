import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ngsh-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  @Input()
  hero: Hero;
  @Output() heroSaved = new EventEmitter();

  constructor(private heroService: HeroService) {}

  onSubmit() {
    this.heroService.saveHero(this.hero);
    this.heroSaved.emit();
  }
}
