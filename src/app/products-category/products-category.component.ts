import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produt } from '../models/produt.model'; 

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id!: number;
  listProducts: Produt[] = [
    {"id":1, "name":"Refrigérateur LG Inox","image":"https://th.bing.com/th/id/R.21d58da92709b1081f31b4a8059711ee?rik=sO2Kcrdf0cK5Og&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f25900000%2fRapunzel-in-action-rapunzel-and-flynn-25908280-1876-1080.jpg&ehk=aB4ofjDsslhGX6IrXwh6f9dsIDdGCAeIuFgt1nj8kR8%3d&risl=&pid=ImgRaw&r=0","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"https://i.pinimg.com/originals/51/81/d0/5181d0843629853872d3dc52951e4e37.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
  ];
  list : Produt[]=[];
  constructor(private ac: ActivatedRoute) { }
ngOnInit(){
    this.ac.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
  }})
  }
}
