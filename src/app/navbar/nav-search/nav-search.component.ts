import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-nav-search',
  standalone: true,
  imports: [],
  templateUrl: './nav-search.component.html',
  styleUrl: './nav-search.component.css',
})
export class NavSearchComponent {

  searchData(e: any) {
    console.log(e.target.value);
  }
}
