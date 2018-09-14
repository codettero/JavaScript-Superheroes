import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  selectedHero: number;
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      alterEgo: 'Bruce Wayne',
      description:
        'Quis eu Lorem laborum proident voluptate officia Lorem laborum dolor.',
      photo: 'assets/batman.jpg',
      universe: 'DC'
    },
    {
      id: 2,
      name: 'Black Widdow',
      alterEgo: 'Natalia Alianovna Romanova',
      description:
        'Id in sit id in anim nostrud aliquip id mollit culpa occaecat occaecat do.',
      photo: 'assets/black-widow.jpg',
      universe: 'Marvel'
    },
    {
      id: 3,
      name: 'Wonder Woman',
      alterEgo: 'Diana Prince',
      description:
        'Aliqua consectetur adipisicing ullamco nisi reprehenderit minim qui deserunt quis.',
      photo: 'assets/wonder-woman.jpg',
      universe: 'DC'
    },
    {
      id: 4,
      name: 'Hulk',
      alterEgo: 'Robert Bruce Banner',
      description: 'Aute voluptate id proident sint ad magna.',
      photo: 'assets/hulk.png',
      universe: 'Marvel'
    }
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id): Hero {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id === id) {
        return Object.assign({}, this.heroes[i]);
      }
    }
  }

  saveHero(hero: Hero) {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id === hero.id) {
        this.heroes[i] = hero;
      }
    }
  }
}
