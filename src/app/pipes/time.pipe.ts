import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const second: number | string = value % 60;
    const minute: number | string = Math.floor(value / 60);
    const hour: number | string = Math.floor(minute / 60);
    const result: string = this.splitFormat(hour) + ':' + this.splitFormat(minute) + ':' + this.splitFormat(second);
    return result;
  }


  splitFormat(digit): any {
    if (digit.toString().length === 1 && digit < 10) {
      digit = '0'.concat(digit.toString());
    }
    return digit;
  }

}
