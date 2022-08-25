import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(value: any = [], searchString?: string):any {  

    if (!searchString) {
          return value;
       }

       console.log(value)
       return value.filter((x: any) => x.bookName.toLocaleLowerCase() .includes(searchString)
         || x.author.toLocaleLowerCase().includes(searchString)
         
       );
       
      }

  // transform(noteFilterData: any, searchString?: string): any {
  //   if (!searchString) {
  //     return noteFilterData;
  //   }
  //   console.log(value)
  //   return noteFilterData.filter((x: any) => x.Title.toLocaleLowerCase().includes(searchString)
  //     || x.Descreption.toLocaleLowerCase().includes(searchString)
  //   );
  // }



}
