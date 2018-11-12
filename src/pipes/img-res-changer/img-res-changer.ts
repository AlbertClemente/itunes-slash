import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgResChanger',
})
export class ImgResChangerPipe implements PipeTransform {
  transform(value: string) {
    value = value.replace('100x100bb', '600x600bb');
    return value;
  }
}
