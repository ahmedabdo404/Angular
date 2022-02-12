import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { bodyComponent } from './body/body.component';
import { NavComponent } from './header/nav/nav.component';
import { InnerHeaderComponent } from './header/inner-header/inner-header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './products/card/card.component';
import { FavoritesComponent } from './products/favorites/favorites.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdetailsComponent } from './products/pdetails/pdetails.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { NewProductComponent } from './products/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    bodyComponent,
    NavComponent,
    InnerHeaderComponent,
    ToDoComponent,
    CardsComponent,
    ProductsComponent,
    CardComponent,
    FavoritesComponent,
    UsersComponent,
    ErrorComponent,
    PdetailsComponent,
    LoginFormsComponent,
    NewProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
