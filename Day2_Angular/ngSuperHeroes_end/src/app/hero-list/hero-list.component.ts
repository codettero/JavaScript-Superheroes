import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ngsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Output() heroSelected = new EventEmitter<Hero>();
  public heros: Hero[];
  selectedUniverse = 'all';

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heros = this.heroService.getHeroes();
  }

  changeUniverse(newUniverse) {
    this.selectedUniverse = newUniverse;
  }

  editHandler(heroId) {
    const selectedHero = this.heroService.getHero(heroId);
    this.heroSelected.emit(selectedHero);
  }
}
