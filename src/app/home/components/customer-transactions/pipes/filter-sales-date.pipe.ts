import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSalesDate'
})
export class FilterSalesDatePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.date.toLowerCase().includes(searchText);
    });
  }

}
