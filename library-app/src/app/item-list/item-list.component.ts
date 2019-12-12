import { Component, OnInit } from '@angular/core';
import { LibraryApiService } from '../library-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: any = [];
  constructor(public service: LibraryApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = [];
    this.service.getItems().subscribe((data: {}) => {
      console.log(data);
      this.items = data;
    });
  }
}
