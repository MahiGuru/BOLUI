import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ProductComponent } from './features/product/product.component';
import { CustomerComponent } from './features/customer/customer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'customers',
    loadChildren: './features/customer/customer.module#CustomerModule'
  },
  {
    path: 'products',
    loadChildren: './features/product/product.module#ProductModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
