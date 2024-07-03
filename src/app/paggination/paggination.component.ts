import { Component, Input, OnInit } from '@angular/core';
import { PagginationItemComponent } from './paggination-item/paggination-item.component';

@Component({
  selector: 'app-paggination',
  standalone: true,
  imports: [
    PagginationItemComponent
  ],
  templateUrl: './paggination.component.html',
  styleUrl: './paggination.component.css'
})
export class PagginationComponent implements OnInit {
  @Input() count : any | undefined;
  pages : any | undefined;

  ngOnInit(): void {
    this.pages = [];
    if(this.count != undefined){
      for (let index = 1; index <= this.count; index++) {
        if(index <= 15)this.pages.push(index);
        if(index > this.count - 5)this.pages.push(index);
      }
    }
  }
}
