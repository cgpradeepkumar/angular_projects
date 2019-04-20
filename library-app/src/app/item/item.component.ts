import { Component, OnInit } from '@angular/core';
import { LibraryApiService } from '../library-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

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
