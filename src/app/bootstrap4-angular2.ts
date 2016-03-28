import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {
    B4Button,
    B4Column,
    B4Row,
    B4Container,
    B4ButtonDropdown,
    B4ButtonDropdownTitle,
    B4ButtonDropdownItem,
    B4ButtonDropdownContent
} from './b4-angular2';


@Component({
    selector: 'bootstrap4-angular2-app',
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/bootstrap4-angular2.html',
    directives: [ROUTER_DIRECTIVES, B4Button, B4Column, B4Row, B4Container, B4ButtonDropdown, B4ButtonDropdownContent, B4ButtonDropdownTitle, B4ButtonDropdownItem],
    pipes: []
})
@RouteConfig([])
export class Bootstrap4Angular2App {
    defaultMeaning:number = 42;

    meaningOfLife(meaning?:number) {
        return `The meaning of life is ${meaning || this.defaultMeaning}`;
    }
}
