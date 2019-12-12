import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'item-list'
  },
  {
    path: 'item-create',
    component: ItemCreateComponent
  },
  {
    path: 'item-edit/:itemId',
    component: ItemEditComponent
  },
  {
    path: 'item-list',
    component: ItemListComponent,
    data: { title: 'Item List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
