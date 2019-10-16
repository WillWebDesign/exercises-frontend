import { Component, OnInit } from '@angular/core';
import { PokemonsTrappedService } from '../shared/services/pokemons-trapped/pokemos-trapped.service';

@Component({
  selector: 'app-pokemons-trapped',
  templateUrl: './pokemons-trapped.component.html',
  styleUrls: ['./pokemons-trapped.component.scss'],
})
export class PokemonsTrappedComponent implements OnInit {
  pokemons: any[];

  constructor(public pokemonsTrapped: PokemonsTrappedService) {}

  async ngOnInit() {
    await this.pokemonsTrapped.loadPokemons();
    this.getPokemons();
  }

  getPokemons() {
    this.pokemons = this.pokemonsTrapped.getPokemons();
  }
}
