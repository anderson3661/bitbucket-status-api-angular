import { Component, OnInit, Input } from '@angular/core';
import { ICurrentIncidents } from '../../utilities/interfaces';


@Component({
  selector: 'app-incidents-current',
  templateUrl: './incidents-current.component.html',
  styleUrls: ['../widgets/widgets.component.scss'],
})
export class IncidentsCurrentComponent implements OnInit {

    @Input() currentIncidents: ICurrentIncidents;
    public numberOfCurrentIncidents: number = 0;

    constructor() { }

    ngOnInit() {
        if (this.currentIncidents && this.currentIncidents.incidents) {
            this.numberOfCurrentIncidents = this.currentIncidents.incidents.length;
        }
    }

}
