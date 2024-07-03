import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { PokemonsService } from '../../services/pokemons.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    RouterLink
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})

export class PokemonCardComponent implements OnInit {
  @Input() name : string | undefined;
  imagePath : String | undefined;
  imageAlt : String | undefined;
  pokemon : any |undefined;
  active: boolean = true;
  favorites : any | undefined;

  constructor(private pokemonsService : PokemonsService){}

  ngOnInit(): void {
    this.active = false;
    this.pokemon = this.getOnePokemon().then((resolve) => {
      this.imageAlt = `photo_${this.name}`;
      this.imagePath = resolve.sprites.other.dream_world.front_default;
    }).catch((error) => {
      // console.log("Erreur "+error);
    });

    this.favorites = this.getFavorites(this.name);
    if(this.favorites){
      this.active = true;
    }
  }

  onAddPokemonFavorite(pokemon : string | undefined) {
    this.active = !this.active;
    if(this.active){
      // j'ajoute en favoris
      this.pokemonsService.addPokemonFavorite(pokemon)
    }else {
      // j'enlève en favoris
      this.pokemonsService.removePokemonFavorite(pokemon);
    }
  }

  getFavorites(name: string | undefined){
    return this.pokemonsService.getPokemonFavorite(this.name);
  }

  getOnePokemon(){
    return this.pokemonsService.getPokemonByName(this.name);
  }
}
