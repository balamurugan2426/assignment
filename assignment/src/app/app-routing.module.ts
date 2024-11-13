import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { loginGuard } from './gaurds/login.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'cart',
    component: AddToCartComponent,
    canActivate: [loginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
