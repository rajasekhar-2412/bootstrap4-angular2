import {Component, HostListener} from 'angular2/core';


@Component({
    selector: 'b4-button-dropdown',
    templateUrl: 'app/b4-button-dropdown/b4-button-dropdown.html',
    styleUrls: ['app/b4-button-dropdown/b4-button-dropdown.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class B4ButtonDropdown {
    open:boolean = false;
    cssClassList:string[] = [];

    constructor() {
    }

    @HostListener('click', ['$event'])
    toggleOpen() {
        this.open = !this.open;
    }
}
