import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'myPipeTrain'
})
export class MyOunPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
  }
}
