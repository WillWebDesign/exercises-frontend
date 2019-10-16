import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastService } from './shared/services/toast/toast.service';
import { HttpService } from './shared/services/http/http.service';
import { LoadingScreenService } from './shared/services/loading-screen/loading-screen.service';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsTrappedComponent } from './pokemons-trapped/pokemons-trapped.component';
import { MenuComponent } from './menu/menu.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { PokemonNameComponent } from './pokemon-name/pokemon-name.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './shared/services/storage/storage.service';
import { PokemonsTrappedService } from './shared/services/pokemons-trapped/pokemos-trapped.service';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToastComponent,
    LoadingScreenComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonsTrappedComponent,
    MenuComponent,
    PokemonCardComponent,
    PokemonDataComponent,
    PokemonImageComponent,
    PokemonNameComponent,
    PokemonStatsComponent,
    PokemonTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [
    HttpService,
    LoadingScreenService,
    ToastService,
    StorageService,
    PokemonsTrappedService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
