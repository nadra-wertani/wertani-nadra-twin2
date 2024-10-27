import { Component } from '@angular/core';
import { Produt } from '../models/produt.model';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  image: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  }
