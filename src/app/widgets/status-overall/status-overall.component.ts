import { Component, OnInit, Input } from '@angular/core';
import { STATUS_API_NONE } from '../../utilities/constants';

@Component({
  selector: 'app-status-overall',
  templateUrl: './status-overall.component.html',
  styleUrls: ['../widgets/widgets.component.scss'],
})
export class StatusOverallComponent implements OnInit {

    public STATUS_API_NONE: string = STATUS_API_NONE;
    @Input() statusIndicator: string;
    @Input() statusDescription: string;

    constructor() { }

    ngOnInit() {
    }

}


export default StatusOverallComponent;
