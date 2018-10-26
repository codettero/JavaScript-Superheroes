import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callHero() {
    alert(this.hero.name + ' has been called!');
  }

  editHero() {
    this.edit.emit(this.hero.id);
  }

}
