import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(value: any = [], searchString?: string) {  // this is a transform method used to transform our O/P.
    console.log(searchString);

    if (!searchString) {
      return value;
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

}
