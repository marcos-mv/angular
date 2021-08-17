import { Component } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Item;

  constructor(){
    this.item = Item.create_blank_item();
  }
}
