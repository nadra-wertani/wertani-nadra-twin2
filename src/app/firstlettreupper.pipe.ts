import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstlettreupper'
})
export class FirstlettreupperPipe implements PipeTransform {

  transform(chaine:string): unknown {
    return chaine[0].toUpperCase()+chaine.substring(1,chaine.length);
  }

}
