import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  q=1;
  kolor='pink'
  sayhello(){
    console.log('Hello');  // Log "Hello" in the browser console
    alert('Hello');    
    
  }
  users=[{name:'jttt',quantity:28,price:25},
    {name:'jelel',quantity:0,price:25},
    {name:'jen',quantity:28,price:25}
  ]
  getcolor(){
    if(this.q>10)
      return'green'
    else return'yelow'
  }
  changecolor(){
    this.kolor='blue'
  }
}