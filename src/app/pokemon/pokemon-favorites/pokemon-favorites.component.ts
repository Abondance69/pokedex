import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonFavoriteCardComponent } from './pokemon-favorites-card/pokemon-favorite-card.component';

@Component({
  selector: 'app-pokemon-favorites',
  standalone: true,
  imports: [
    PokemonFavoriteCardComponent
  ],
  templateUrl: './pokemon-favorites.component.html',
  styleUrl: './pokemon-favorites.component.css'
})
export class PokemonFavoritesComponent implements OnInit {
  pokemons : any | undefined;
  favorites : any | undefined;
  name : any | undefined;

  constructor(private pokemonsService : PokemonsService){}

  ngOnInit(): void {
    this.favorites = [];

    this.pokemons = this.getAllPokes().then((resolve) => {
      resolve.results.forEach((element : any) => {
        this.name = element.name;
        if(this.pokemonsService.getPokemonFavorite(this.name)){
          this.favorites.push(this.name);
        }
      })
      
    }).catch((error) => {
      // console.log(error);
    })
  }

  public getAllPokes(){
    return this.pokemonsService.getAllPokemonAsync();
  } 
}
