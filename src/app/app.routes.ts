import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonFavoritesComponent } from './pokemon/pokemon-favorites/pokemon-favorites.component';
import { RegisterComponent } from './register/register.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: PokemonFavoritesComponent },
  { path: 'register', component: RegisterComponent },
];
