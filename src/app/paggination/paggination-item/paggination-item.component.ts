import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paggination-item',
  standalone: true,
  imports: [],
  templateUrl: './paggination-item.component.html',
  styleUrl: './paggination-item.component.css'
})
export class PagginationItemComponent {
  @Input() page : any | undefined;
}
