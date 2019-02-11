import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing'
})
export class TestingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.sqrt(value);
  }

}
