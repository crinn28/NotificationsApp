import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preposition'
})
export class PrepositionPipe implements PipeTransform {

  transform(value: String): String {
    return "By " + value;
  }

}
