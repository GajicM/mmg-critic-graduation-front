import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  standalone: true,
})
export class DateTimePipe implements PipeTransform {
  transform(value: number, format: string = 'MM/dd/yyyy HH:mm:ss'): string {
    if (!value) return '';

    const date = new Date(value); // Convert from seconds to milliseconds
    return this.formatDate(date, format);
  }

  private formatDate(date: Date, format: string): string {
    // Here you can customize the format or use a library like date-fns or moment.js
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      // hour: '2-digit',
      // minute: '2-digit',
      // second: '2-digit',
      // hour12: false,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
