import { Component, OnInit } from '@angular/core';

import { APP_TITLE, BITBUCKET_STATUS_API_OVERALL_STATUS, BITBUCKET_STATUS_API_SERVICES, BITBUCKET_STATUS_API_CURRENT_INCIDENTS, BITBUCKET_STATUS_API_RECENT_INCIDENTS } from './../utilities/constants';
import * as helpers from './../utilities/helper-functions/helpers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public APP_TITLE: string = APP_TITLE;
    public BITBUCKET_STATUS_API_OVERALL_STATUS: string = BITBUCKET_STATUS_API_OVERALL_STATUS;
    public BITBUCKET_STATUS_API_SERVICES: string = BITBUCKET_STATUS_API_SERVICES;
    public BITBUCKET_STATUS_API_CURRENT_INCIDENTS: string = BITBUCKET_STATUS_API_CURRENT_INCIDENTS;
    public BITBUCKET_STATUS_API_RECENT_INCIDENTS: string = BITBUCKET_STATUS_API_RECENT_INCIDENTS;

    constructor() { }

    ngOnInit() {
        helpers.goToTopOfPage();
    }

}
