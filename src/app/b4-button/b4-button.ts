import {Component, Input, HostListener} from 'angular2/core';
const bbPrefix:string = 'btn-';

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
    href:string = '';
    @Input()
    outline:boolean = false;
    @Input()
    size:''| 'sm' |'lg' = '';
    @Input()
    type:'primary'| 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link' = 'secondary';

    cssClassList:String[] = ['btn'];

    constructor() {
    }

    ngOnInit() {
        let cssStyleClass = bbPrefix + this.type;

        if (this.disabled) {
            this.cssClassList.push('disabled');
        }
        if (this.outline) {
            cssStyleClass += '-outline'
        }

        if (this.block) {
            this.cssClassList.push(bbPrefix + 'block');
        }

        this.cssClassList.push(cssStyleClass);

        if (this.size !== '') {
            this.cssClassList.push(bbPrefix + this.size);
        }
    }

    @HostListener('click', ['$event'])
    haltDisabledEvents(event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
