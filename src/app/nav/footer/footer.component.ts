import { Component, OnInit } from '@angular/core';

import { PATH_WIDGETS, PATH_CONTACT, PATH_ABOUT, COPYRIGHT } from '../../utilities/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class NavFooterComponent implements OnInit {

    public PATH_WIDGETS: string = PATH_WIDGETS;
    public PATH_CONTACT: string = PATH_CONTACT;
    public PATH_ABOUT: string = PATH_ABOUT;
    public COPYRIGHT: string = COPYRIGHT;

    constructor() { }

    ngOnInit() {
    }

}
