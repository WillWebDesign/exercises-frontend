import { Injectable, Inject } from '@angular/core';
import { StorageService } from './../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonsTrappedService {
  pokemons: any;
  key = 'pokemons-trapped';

  constructor(private storageService: StorageService) {}

  async loadPokemons() {
    this.pokemons = [];
    const data = this.storageService.get(this.key);
    if (data) {
      this.pokemons = data;
    } else {
      this.storageService.set(this.key, this.pokemons);
    }
    return true;
  }

  private updateCart() {
    this.storageService.set(this.key, this.pokemons);
  }

  setPokemon(pokemon) {
    this.pokemons.push(pokemon);
    this.updateCart();
  }

  getPokemons() {
    return this.pokemons;
  }
}
