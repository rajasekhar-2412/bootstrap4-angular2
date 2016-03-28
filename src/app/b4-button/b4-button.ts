import {Component, Input, SimpleChange} from 'angular2/core';
const bbPrefix: string= 'btn-';

@Component({
    selector: 'b4-button',
    templateUrl: 'app/b4-button/b4-button.html',
    styleUrls: ['app/b4-button/b4-button.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class B4Button {
    @Input()
    block:boolean = false;
    @Input()
    disabled:boolean = false;
    @Input()
    outline:boolean = false;
    @Input()
    size:''| 'sm' |'lg' = '';
    @Input()
    type:'primary'| 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link' = 'secondary';
    @Input()
    cssClassList:String[] = ['btn'];

    constructor() {
    }

    ngOnInit() {
        this.cssClassList.push(bbPrefix+ this.type);
    }

    //
    // ngOnChanges(changes:{[key:string]: SimpleChange}):any {
    //     if (changes['type']) {
    //         debugger
    //     }
    // }
}
