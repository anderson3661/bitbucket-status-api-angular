import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingErrorComponent } from './loading-error/loading-error.component';
import { NavHeaderComponent } from './nav/header/header.component';
import { NavFooterComponent } from './nav/footer/footer.component';
import { WidgetsComponent } from './widgets/widgets/widgets.component';
import { WidgetControlsComponent } from './widgets/widget-controls/widget-controls.component';
import { StatusServicesComponent } from './widgets/status-services/status-services.component';
import { StatusOverallComponent } from './widgets/status-overall/status-overall.component';
import { IncidentsCurrentComponent } from './widgets/incidents-current/incidents-current.component';
import { IncidentsRecentComponent } from './widgets/incidents-recent/incidents-recent.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        LoadingErrorComponent,
        NavHeaderComponent,
        NavHeaderComponent,
        NavFooterComponent,
        WidgetsComponent,
        WidgetControlsComponent,
        StatusServicesComponent,
        StatusOverallComponent,
        IncidentsCurrentComponent,
        IncidentsRecentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatSortModule,
        MatSlideToggleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
