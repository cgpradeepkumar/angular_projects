import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { LibraryApiService } from '../library-api.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item : {title, author, publisher, language, category, type, isbn, price} = {title: '', author: '', publisher: '', language: '', category: '', type: '', isbn: '', price: null};
  
  constructor(public service: LibraryApiService) { }

  ngOnInit() {
  }

  public createItem() {
    //console.log(this.item);
    const item_new = new Item();
    item_new.title = this.item.title;
    item_new.author = this.item.author;
    item_new.language = this.item.language;
    item_new.publisher = this.item.publisher;
    item_new.category = this.item.category;
    item_new.type = this.item.type;
    item_new.price = this.item.price;

    this.service.createItem(item_new);

    this.item = {title: '', author: '', publisher: '', language: '', category: '', type: '', isbn: '', price: null};
  }
}
