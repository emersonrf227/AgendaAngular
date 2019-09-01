import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'order',
})
export class OrderPipe implements PipeTransform {
    transform(items: any, orderBy: string) {

		if(orderBy) {
			var result = _.orderBy(items, ['nome'], [orderBy]);
			return result;
		}

		return items;
    }
}

