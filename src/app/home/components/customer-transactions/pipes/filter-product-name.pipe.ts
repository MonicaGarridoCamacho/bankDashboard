import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductName'
})
export class FilterProductNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.product_description.toLowerCase().includes(searchText);
    });
  }

}
