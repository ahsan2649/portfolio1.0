import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../ItemInterface';

@Pipe({
  name: 'itemsFilterByCategory'
})
export class ItemsFilterByCategoryPipe implements PipeTransform {

  transform(items: Item[], category: string): Item[] {
    return items.filter(item => item.category == category);
  }

}
