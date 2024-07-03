import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importez CommonModule
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-favorite-card',
  standalone: true,
  imports: [CommonModule],  // Ajoutez CommonModule ici
  templateUrl: './pokemon-favorite-card.component.html',
  styleUrls: ['./pokemon-favorite-card.component.css'],
})
export class PokemonFavoriteCardComponent {
  @Input() name: string | undefined;
  imagePath: String | undefined;
  imageAlt: String | undefined;
  pokemon: any | undefined;
  active: boolean = true;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemonByName(this.name).then((resolve) => {
      this.imageAlt = `image_${this.name}`;
      this.imagePath = resolve.sprites.other.dream_world.front_default;
    }).catch((error) => {
      // console.error("Erreur: ", error);
    });
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
}
