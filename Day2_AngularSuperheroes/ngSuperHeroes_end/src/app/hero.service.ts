import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heros: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      alterEgo: 'Bruce Wayne',
      description: 'Bla bla bla despre Batman',
      photo: 'assets/batman.jpg',
      universe: 'DC'
    },
    {
      id: 2,
      name: 'Black Widdow',
      alterEgo: 'Natalia Alianovna Romanova',
      description: 'Bla bla bla despre Batman',
      photo: 'assets/black-widow.jpg',
      universe: 'Marvel'
    },
    {
      id: 3,
      name: 'Wonder Woman',
      alterEgo: 'Diana Prince',
      description: 'Bla bla bla despre Wonder Woman',
      photo: 'assets/wonder-woman.jpg',
      universe: 'DC'
    },
    {
      id: 4,
      name: 'Hulk',
      alterEgo: 'Robert Bruce Banner',
      description: 'Bla bla bla despre Hulk',
      photo: 'assets/hulk.png',
      universe: 'Marvel'
    }
  ];

  getHero(heroId) {
    for (let i = 0; i < this.heros.length; i++) {
      if (this.heros[i].id === heroId) {
        return this.heros[i];
      }
    }
  }

  constructor() { }
}
