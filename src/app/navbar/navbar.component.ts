import { Component } from '@angular/core';
import { NavbarTitleComponent } from './navbar-title/navbar-title.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarTitleComponent,
    NavSearchComponent,
    NavbarLinkComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
