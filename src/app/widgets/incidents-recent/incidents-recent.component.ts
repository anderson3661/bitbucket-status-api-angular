import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { IRecentIncidents } from '../../utilities/interfaces';
import * as helpers from '../../utilities/helper-functions/helpers';

@Component({
  selector: 'app-incidents-recent',
  templateUrl: './incidents-recent.component.html',
  styleUrls: ['../widgets/widgets.component.scss'],
})
export class IncidentsRecentComponent implements OnInit {

    @Input() recentIncidents: IRecentIncidents;

    public displayedColumns: string[] = ['name', 'status', 'created_at'];

    public dataSource: any;

    @ViewChild(MatSort) sort: MatSort;

    getFormattedDate(date: string): string {
        return helpers.getFormattedDate(date);
    }

    constructor() {
    }

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    ngOnChanges() {
        this.dataSource = (this.recentIncidents && this.recentIncidents.incidents ? new MatTableDataSource(this.recentIncidents.incidents) : []);
        this.dataSource.sort = this.sort;
    }

}
