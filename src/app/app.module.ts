import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './utilisateur/profil/profil.component';
import { FirstlettreupperPipe } from './firstlettreupper.pipe';
import { TestDirective } from './test.directive';
import { ListCatigoriesComponent } from './list-catigories/list-catigories.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user/user.component';
import { ProductComponent } from './product/product/product.component';
import { ProviderModuleComponent } from './provider/provider-module/provider-module.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    FirstlettreupperPipe,
    TestDirective,
    ListCatigoriesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    UserComponent,
    ProductComponent,
    ProviderModuleComponent,
    ProductsCategoryComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
