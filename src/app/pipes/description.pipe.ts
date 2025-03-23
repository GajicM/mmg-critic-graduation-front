import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true,
})
export class DescriptionPipe implements PipeTransform {
  transform(value: any): unknown {
    return this.getDesc(value);
  }
  getDesc(_t4: any) {
    if (_t4 == null) {
      return 'TBA';
    }
    let avg = _t4.voteAverage || _t4.finalGrade;
    if (typeof _t4 == 'number') {
      avg = _t4;
    }
    if (avg == null) {
      return 'TBA';
    }
    switch (true) {
      case avg >= 9:
        return 'Universal Acclaim';
      case avg >= 7:
        return 'Generally Favorable';
      case avg >= 5:
        return 'Mixed or Average';
      case avg > 0:
        return 'Unfavorable';
      default:
        return 'TBA';
    }
  }
}
