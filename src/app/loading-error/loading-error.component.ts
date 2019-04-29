import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-error',
  templateUrl: './loading-error.component.html',
  styleUrls: ['./loading-error.component.scss']
})
export class LoadingErrorComponent implements OnInit {

    @Input() public errorMessage: string;

    constructor() { }

    ngOnInit() {
    }

}
