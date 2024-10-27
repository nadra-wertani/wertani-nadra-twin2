import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  constructor(){
    console.log('cons') //tetlassa 9bal ngOnInit
  }
  ngOnInit(){
    console.log('ngonit')//initialisation:cycle de vie d'un composent
  }
  filtre="twin2"

}
