import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, 
    PokemonComponent, 
    FormComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: String | undefined;

  ngOnInit(): void {
    this.title = "Pokedex";
  }
}