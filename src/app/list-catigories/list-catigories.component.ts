import { Component } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-list-catigories',
  templateUrl: './list-catigories.component.html',
  styleUrls: ['./list-catigories.component.css']
})
export class ListCatigoriesComponent {
  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"", "available":true},
    {"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"", "available":true},
    {"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"", "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"", "available":true},
    {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"", "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"","available":false},
  ]

}
