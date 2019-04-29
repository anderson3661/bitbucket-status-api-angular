// ********************************************************
// ************************ PAGE **************************
// ********************************************************

interface IPage {
    page: {
        id: string,
        name: string,
        url: string,
        updated_at: string,
    },
}



// ********************************************************
// ******************* OVERALL STATUS *********************
// ********************************************************

export interface IOverallStatus {
    page: IPage,
    status: {
        description: string,
        indicator: string,
    },
}



// ********************************************************
// ******************* SERVICES STATUS ********************
// ********************************************************

interface IComponent {
    created_at: string,
    description: string,
    id: string,
    name: string,
    page_id: string,
    position: number,
    status: string,
    updated_at: string,
}

interface IComponents extends Array<IComponent>{}

export interface IServices {
    page: IPage,
    components: IComponents,
}


interface IServiceComponent {
    name: string;
    status: string;
}

export interface IServicesComponent extends Array<IServiceComponent>{}



// ********************************************************
// ******************* CURRENT INCIDENTS ******************
// ********************************************************

interface IIncidentUpdate {
    body: string,
    created_at: string,
    display_at: string,
    id: string,
    incident_id: string,
    status: string,
    updated_at: string,
}

interface IIncidentsUpdate extends Array<IIncidentUpdate>{}

interface IIncident {
    created_at: string,
    id: string,
    impact: string,
    incident_updates: IIncidentsUpdate,
    monitoring_at: string,
    name: string,
    page_id: string,
    resolved_at: string,
    shortlink: number,
    status: string,
    updated_at: string,
}

interface IIncidents extends Array<IIncident>{}

export interface ICurrentIncidents {
    page: IPage,
    incidents: IIncidents,
}



// ********************************************************
// ******************* RECENT INCIDENTS *******************
// ********************************************************

export interface IRecentIncidents {
    page: IPage,
    incidents: IIncidents,
}