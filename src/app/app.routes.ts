import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';

export const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokemons', component: PokemonComponent },
  { path: 'login', component: LoginComponent },
];
