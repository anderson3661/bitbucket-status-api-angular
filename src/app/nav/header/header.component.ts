import { Component, OnInit } from '@angular/core';

import { APP_TITLE } from '../../utilities/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class NavHeaderComponent implements OnInit {

    public APP_TITLE: string = APP_TITLE;

    constructor() { }

    ngOnInit() {
    }

}
