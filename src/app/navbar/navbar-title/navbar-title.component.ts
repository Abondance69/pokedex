import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-title',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar-title.component.html',
  styleUrl: './navbar-title.component.css'
})
export class NavbarTitleComponent {
  logo : String | undefined;

  ngOnInit(){
    this.logo = "https://cdn.pixabay.com/photo/2023/06/24/03/50/monster-ball-8084507_1280.png";
  }
}
