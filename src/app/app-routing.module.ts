import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { PdetailsComponent } from './products/pdetails/pdetails.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"Products", component: ProductsComponent},
  {path:"Pdetails/:id", component: PdetailsComponent},
  {path:"user", component: UsersComponent},
  {path:"login-forms", component: LoginFormsComponent},
  {path:"new-product", component: NewProductComponent},
  {path:'', component: LoginFormsComponent},
  {path:"**", component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
