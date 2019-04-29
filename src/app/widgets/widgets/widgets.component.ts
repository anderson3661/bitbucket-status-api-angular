import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiCallsService } from './../../services/api-calls.service';
import { IOverallStatus, IServices, IServicesComponent, ICurrentIncidents, IRecentIncidents } from '../../utilities/interfaces';
import { SERVICES } from '../../utilities/constants';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

    public overallStatus: IOverallStatus;
    public statusIndicator: string;
    public statusDescription: string;
    public statusOfServices: IServices;
    public selectedStatusOfServices: IServicesComponent;
    public currentIncidents: ICurrentIncidents;
    public recentIncidents: IRecentIncidents;
    public lastUpdated: Date;
    public frequencyOfUpdates: string;
    public monitoring: boolean;
    public errorMessage: string;

    private updateIntervalObservable: Subscription;

    constructor(private _apiCallsService: ApiCallsService) { }

    ngOnInit() {
        this.apiCalls();            // Do an initial load of the API calls (even if monitoring is turned off)
    }

    apiCalls = () => {

        this._apiCallsService.api_overall_status()
            .subscribe(data => {
                this.overallStatus = data;
                this.statusIndicator = this.overallStatus.status.indicator;
                this.statusDescription = this.overallStatus.status.description;
            },
            error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
            });

        this._apiCallsService.api_services_status()
            .subscribe(data => {
                this.selectedStatusOfServices = [];
                this.statusOfServices = data;
                data.components.forEach(component => {
                    // Just get the required services and push to the array
                    if (SERVICES.indexOf(component.name) !== -1) this.selectedStatusOfServices.push(component);
                });
            },
            error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
            });

        this._apiCallsService.api_current_incidents()
            .subscribe(data => {
                this.currentIncidents = data;
            },
            error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
            });

        this._apiCallsService.api_recent_incidents()
            .subscribe(data => {
                this.recentIncidents = data;
            },
            error => {
                this.errorMessage = error;
                console.log(this.errorMessage);
            });

        this.lastUpdated = new Date();          // Set the lastUpdated date to the current date/time to record when the API calls were last made
    }

    unsubscribeFromAPICalls = () => {
        if (this.updateIntervalObservable) this.updateIntervalObservable.unsubscribe();      //Unsubscribe from the observable to stop memory leaks
    }

    changeToMonitoring = (value: boolean) => {
        // If the user changes monitoring then set the frequency of updates, and call the method to stop the previous interval and start making the API calls on the set interval
        if (this.monitoring !== value) {
            this.monitoring = value;
            if (this.monitoring) {
                const frequencyOfUpdatesPreviousValue = this.frequencyOfUpdates;
                this.frequencyOfUpdates = "";
                this.changeToFrequencyOfUpdates(frequencyOfUpdatesPreviousValue);
            } else {
                this.unsubscribeFromAPICalls();
            }
        }
    }

    changeToFrequencyOfUpdates = (value: string) => {
        // If the user changes the frequency of updates, then stop the previous interval and start making the API calls on the new interval
        if (this.frequencyOfUpdates !== value) {
            this.frequencyOfUpdates = value;
            if (this.monitoring) {
                this.unsubscribeFromAPICalls();
                const updateFrequency: number = parseInt(this.frequencyOfUpdates.substring(0, this.frequencyOfUpdates.indexOf(" "))) * 60 * 1000;
                this.updateIntervalObservable = interval(updateFrequency).subscribe(() => this.apiCalls());
            }
        }
    }

    ngOnDestroy() {
        this.unsubscribeFromAPICalls();
    }

}
