import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product-detail',
    component: ProductDetailComponent
  }, {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  // { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
