import {Component, Input} from 'angular2/core';


@Component({
    selector: 'b4-container',
    templateUrl: 'app/b4-container/b4-container.html',
    styleUrls: ['app/b4-container/b4-container.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class B4Container {
    @Input()
    fluid:boolean = false;

    cssClassList:string [] = [];

    constructor() {
    }

    ngOnInit() {
        if (this.fluid) {
            this.cssClassList.push('container-fluid');
        } else {
            this.cssClassList.push('container');
        }
    }
}
