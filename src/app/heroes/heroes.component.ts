import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { heroes } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes = heroes;
  hero: Hero = {
    id: 1,
    name: 'Ayoub',
  };
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
