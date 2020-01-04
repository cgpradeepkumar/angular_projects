import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { LibraryApiService } from '../library-api.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item;
  alerts: Array<string> = [];
  
  constructor(public service: LibraryApiService) {
    this.item = new Item();
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.item);
    this.service.createItem(this.item).subscribe(response => {
      console.log(response);
      this.alerts.push('Created Successfully!');
      this.item = new Item();
    }, errors => {
      console.log(errors);
      this.alerts.push('Failed to create! Please try again');
    });
  }

}
