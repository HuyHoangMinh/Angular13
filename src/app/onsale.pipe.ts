import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
   if(value>0)
    return 'Đang hạ giá!';
   else
    return '';
  }

}
