import { Component, OnInit } from '@angular/core';
import { LibraryApiService } from '../library-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  constructor(public service: LibraryApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.service.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
