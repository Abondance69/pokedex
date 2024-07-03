import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit {
  @Input() name : String | undefined;
  @Input() url : String | undefined;
  imagePath : String | undefined;
  imageAlt : String | undefined;

  ngOnInit(): void {
    const pokemon = {
      id : 1, // donner par l'api
      name : this.name,
      url : this.url,
      sprites : {
        other : {
          dream_world : {
            front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }
          
        }
      }
    }
    this.imagePath = pokemon.sprites.other.dream_world.front_default;
    this.imageAlt = `photo_${this.name}`;
  }
}
