import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/services/http/http.service';
import { LoadingScreenService } from '../shared/services/loading-screen/loading-screen.service';
import { ToastService } from '../shared/services/toast/toast.service';
import { from, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonId: any;
  pokeApiRoutes: any[];
  pokemon: any;
  tab = 1;

  constructor(
    public route: ActivatedRoute,
    public http: HttpService,
    public loading: LoadingScreenService,
    public toast: ToastService,
  ) {}

  ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    this.pokeApiRoutes = [
      `pokemon-species/${this.pokemonId}`,
      `pokemon/${this.pokemonId}`,
    ];
    this.loading.startLoading();
    this.getDataPokemon(this.pokeApiRoutes).subscribe(
      (res: any) => {
        console.log(res);
        this.pokemon = { ...this.pokemon, ...res };
      },
      (error) => {
        this.loading.stopLoading();
        this.toast.present({
          message: 'Oops, something went wrong. try again!',
          type: 'error',
        });
        console.log(error);
      },
      () => {
        this.loading.stopLoading();
      },
    );
  }

  getDataPokemon(routes: any[]) {
    return from(routes).pipe(
      concatMap((route) => this.http.get(route)),
    );
  }

  selectTab(tab) {
    this.tab = tab;
  }

  isActive(tab) {
    return tab === this.tab;
  }
}
