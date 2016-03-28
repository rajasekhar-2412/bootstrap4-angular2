import {Component, Input} from 'angular2/core';
const colPrefix:string = 'col-';

@Component({
    selector: 'b4-column',
    templateUrl: 'app/b4-column/b4-column.html',
    styleUrls: ['app/b4-column/b4-column.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class B4Column {
    @Input()
    xl:number;
    @Input()
    lg:number;
    @Input()
    md:number;
    @Input()
    sm:number;
    @Input()
    xs:number;

    cssClassList:String[] = [];

    constructor() {

    }

    ngOnInit() {
        if (this.xl) {
            this.cssClassList.push(colPrefix + 'xl-' + this.xl)
        }
        if (this.lg) {
            this.cssClassList.push(colPrefix + 'lg-' + this.lg)
        }
        if (this.md) {
            this.cssClassList.push(colPrefix + 'md-' + this.md)
        }
        if (this.sm) {
            this.cssClassList.push(colPrefix + 'sm-' + this.sm)
        }
        if (this.xs) {
            this.cssClassList.push(colPrefix + 'xs-' + this.xs)
        }
    }

}
