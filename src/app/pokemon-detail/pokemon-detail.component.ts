import { Component, Input } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent {
  @Input() name: string | undefined;
  imagePath: String | undefined;
  imageAlt: String | undefined;
  pokemon: any | undefined;
  active: boolean = true;
  favorites: any | undefined;
  pokemonName : any | undefined;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name');

    this.active = false;
    this.pokemon = this.getOnePokemon()
      .then((resolve) => {
        this.imageAlt = `photo_${this.pokemonName}`;
        this.imagePath = resolve.sprites.other.dream_world.front_default;
      })
      .catch((error) => {
        // console.log("Erreur "+error);
      });

    this.favorites = this.getFavorites(this.pokemonName);
    if (this.favorites) {
      this.active = true;
    }
  }

  onAddPokemonFavorite(pokemon: string | undefined) {
    this.active = !this.active;
    if (this.active) {
      // j'ajoute en favoris
      this.pokemonsService.addPokemonFavorite(pokemon);
    } else {
      // j'enlève en favoris
      this.pokemonsService.removePokemonFavorite(pokemon);
    }
  }

  getFavorites(name: string | undefined) {
    return this.pokemonsService.getPokemonFavorite(this.pokemonName);
  }

  getOnePokemon() {
    return this.pokemonsService.getPokemonByName(this.pokemonName);
  }
}
