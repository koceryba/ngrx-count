import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
    value: number;
    @Input() set count(value: number) {
        this.value = value;
    }
    
    constructor() { }
    
    ngOnInit() {
    }
    
    getCounterClass(value) {
        if (value > 0) {
            return 'positive';
        }
        if (value === 0) {
            return 'zero';
        }
        return 'negative';
    }
}
