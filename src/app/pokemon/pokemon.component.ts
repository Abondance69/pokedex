import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PagginationComponent } from '../paggination/paggination.component';
import { RouterLink } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    PokemonCardComponent,
    PagginationComponent,
    RouterLink
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  firstname: String | undefined;
  pokemons: any | undefined;
  count: Number | undefined;
  test: any | undefined;
  abondance: any | undefined;

  ngOnInit(): void {
    this.firstname = 'Voldi';
    this.count = 25;
    this.test = this.getAllPokes().then((resolve) =>{
      // console.log(resolve);
      this.pokemons = resolve.results;
    }).catch((error) => {
      // console.log("Erreur : "+error);
    });
  }

  constructor(private pokemonsService: PokemonsService) {}

  public getAllPokes(){
    // console.log(this.pokemonsService.getAllPokemonAsync());
    return this.pokemonsService.getAllPokemonAsync();
  } 
}
