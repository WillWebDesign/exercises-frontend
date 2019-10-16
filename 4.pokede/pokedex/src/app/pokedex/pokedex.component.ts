import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http/http.service';
import { LoadingScreenService } from '../shared/services/loading-screen/loading-screen.service';
import { ToastService } from '../shared/services/toast/toast.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: any[];

  constructor(
    public http: HttpService,
    public loading: LoadingScreenService,
    public toast: ToastService,
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.loading.startLoading();
    this.http.get('pokedex/1/').subscribe(
      (res: any) => {
        this.loading.stopLoading();
        console.log(res);
        this.pokemons = res.pokemon_entries;
      },
      (err) => {
        this.loading.stopLoading();
        this.toast.present({
          message: 'Oops, something went wrong. try again!',
          type: 'error',
        });
        console.log(err);
      },
    );
  }
}
