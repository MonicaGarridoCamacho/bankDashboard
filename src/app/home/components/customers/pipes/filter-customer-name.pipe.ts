import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCustomerName'
})
export class FilterCustomerNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.lastname.toLowerCase().includes(searchText);
    });
  }

}
