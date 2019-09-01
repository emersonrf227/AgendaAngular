import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any, filterBy: string) {

		if(filterBy) {
			var values = items.filter(function(data) {
				return data.nome.toUpperCase().includes(filterBy.toUpperCase());
			});
	
			return values;
		}

		return items;
    }
}

