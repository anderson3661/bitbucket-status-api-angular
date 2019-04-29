import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WidgetsComponent } from './widgets/widgets/widgets.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoadingErrorComponent } from './loading-error/loading-error.component';

const routes: Routes = [
    { pathMatch: 'full', path: '', redirectTo: 'home' },
    { path: 'home', component: WidgetsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: LoadingErrorComponent }];

      
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],            // Add enableTracing: true to the object if required
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }