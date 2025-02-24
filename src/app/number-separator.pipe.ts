import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSeparator',
  standalone: true,
})
export class NumberSeparatorPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null || value === '') return '';
    return Number(value).toLocaleString('en-US');
  }
}
