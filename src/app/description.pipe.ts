import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any): unknown {
    return this.getDesc(value);
  }
  getDesc(_t4: any) {
    let avg=_t4.voteAverage || _t4.finalGrade;
   switch (true) {
      case avg >= 8:
        return 'Generaly Favorable';
      case avg >= 6:
        return 'Mixed or Average';
      case avg > 0:
        return 'Unfavorable';
      default:
        return '';
    }
  }

}
