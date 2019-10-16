import { Component, OnInit, Input } from '@angular/core';
import { PokemonsTrappedService } from '../shared/services/pokemons-trapped/pokemos-trapped.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;
  @Input() isTrap = false;

  constructor(public pokemonsTrapped: PokemonsTrappedService) {}

  ngOnInit() {
    this.pokemonsTrapped.loadPokemons();
  }

  trap(pokemon) {
    this.pokemonsTrapped.setPokemon(pokemon);
  }
}
