import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOverallStatus, IServices, ICurrentIncidents, IRecentIncidents } from '../utilities/interfaces';

import { BITBUCKET_STATUS_API_OVERALL_STATUS, BITBUCKET_STATUS_API_SERVICES, BITBUCKET_STATUS_API_CURRENT_INCIDENTS, BITBUCKET_STATUS_API_RECENT_INCIDENTS } from '../utilities/constants';


@Injectable({
    providedIn: 'root'
})
export class ApiCallsService {

    constructor(private http: HttpClient) { }

    api_overall_status(): Observable<IOverallStatus> {
        return this.http.get<IOverallStatus>(BITBUCKET_STATUS_API_OVERALL_STATUS).pipe(
            catchError(this.errorHandler)
        );
    }

    api_services_status(): Observable<IServices> {
        return this.http.get<IServices>(BITBUCKET_STATUS_API_SERVICES).pipe(
            catchError(this.errorHandler)
        );
    }

    api_current_incidents(): Observable<ICurrentIncidents> {
        return this.http.get<ICurrentIncidents>(BITBUCKET_STATUS_API_CURRENT_INCIDENTS).pipe(
            catchError(this.errorHandler)
        );
    }

    api_recent_incidents(): Observable<IRecentIncidents> {
        return this.http.get<IRecentIncidents>(BITBUCKET_STATUS_API_RECENT_INCIDENTS).pipe(
            catchError(this.errorHandler)
        );
    }

    errorHandler = (error: HttpErrorResponse) => {
        return throwError(error.message || "Server Error");
    }

}
