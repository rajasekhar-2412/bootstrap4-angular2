import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {B4Button} from './b4-button/b4-button';


@Component({
  selector: 'bootstrap4-angular2-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/bootstrap4-angular2.html',
  directives: [ROUTER_DIRECTIVES, B4Button],
  pipes: []
})
@RouteConfig([

])
export class Bootstrap4Angular2App {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
