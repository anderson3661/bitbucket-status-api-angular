import { Component, OnInit, Input } from '@angular/core';
import { SERVICES_OPERATIONAL } from '../../utilities/constants';
import { IServices } from '../../utilities/interfaces';

@Component({
  selector: 'app-status-services',
  templateUrl: './status-services.component.html',
  styleUrls: ['../widgets/widgets.component.scss'],
})
export class StatusServicesComponent implements OnInit {

    public SERVICES_OPERATIONAL: string = SERVICES_OPERATIONAL;
    @Input() statusOfServices: IServices[];

    constructor() { }

    ngOnInit() {
    }

}
