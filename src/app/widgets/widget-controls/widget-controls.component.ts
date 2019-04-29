import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FREQUENCY_OF_UPDATES } from '../../utilities/constants';
import * as helpers from '../../utilities/helper-functions/helpers';

@Component({
  selector: 'app-widget-controls',
  templateUrl: './widget-controls.component.html',
  styleUrls: ['../widgets/widgets.component.scss'],
})
export class WidgetControlsComponent implements OnInit {

    public FREQUENCY_OF_UPDATES: string[] = FREQUENCY_OF_UPDATES;
    public frequencyOfUpdates: string = FREQUENCY_OF_UPDATES[FREQUENCY_OF_UPDATES.length - 1];
    
    @Input() lastUpdated: string;

    @Output() public monitoringControls: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public frequencyOfUpdatesControls: EventEmitter<string>  = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.lastUpdated = helpers.getFormattedDate(this.lastUpdated);
    }

    onChangeMonitoring(e: any) {
        this.monitoringControls.emit(e.checked);            // If the value of monitoring has changed, send it back to the parent component
    }

    onChangeFrequencyOfUpdates(e: any) {
        this.frequencyOfUpdatesControls.emit(e.value);      // If the value of Frequency of API Calls has changed, send it back to the parent component
    }

}
