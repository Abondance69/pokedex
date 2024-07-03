import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar-link.component.html',
  styleUrl: './navbar-link.component.css'
})
export class NavbarLinkComponent {

}
