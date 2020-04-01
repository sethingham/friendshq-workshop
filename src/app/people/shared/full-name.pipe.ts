import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from 'src/app/shared/friend.model';
import { isEmptyExpression } from '@angular/compiler';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Friend, ...args: any[]): any {
    return `${value.firstName} ${value.lastName}`;
  }

}
