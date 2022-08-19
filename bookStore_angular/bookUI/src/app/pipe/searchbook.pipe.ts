import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(value: any = [], searchString?: string):any {  
    console.log(searchString);

    if (!searchString) {
      return searchString;
    }

    const allbooks = []
    for (const book of value) {
      if (book.bookName.toLowerCase().includes(searchString) || book.description.toLowerCase().includes(searchString)
        || book.author.toLowerCase().includes(searchString)) {
        allbooks.push(book);
      }
    }
    return allbooks;
  }

  // return noteFilterData.filter((x: any) => x.Title.toLocaleLowerCase().includes(searchString)
  //     || x.Descreption.toLocaleLowerCase().includes(searchString)
  //   );
}
