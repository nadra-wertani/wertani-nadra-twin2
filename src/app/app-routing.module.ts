import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ListCatigoriesComponent } from './list-catigories/list-catigories.component';

const routes: Routes = [
  
 {path:"home", component:HomeComponent},
 {path:"", redirectTo:"home", pathMatch:'full'},

 {path:"**", component:NotFoundComponent },
 {path:"path/:id", component:ProductsCategoryComponent},
 { path: 'product/:id', component: ProductsCategoryComponent },
 { path: 'list-categories', component:ListCatigoriesComponent },
  { path: 'products-category/:id', component: ProductsCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
