import { Pipe, PipeTransform } from '@angular/core';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(details:any, term: string): any {
    if(!term)
    
      return details ;
    


     return details.filter(char=> char.characterName.toLowerCase().includes(term.toLowerCase()) );
         

    }

    
   
  }


