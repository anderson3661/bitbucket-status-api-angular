import { Component } from '@angular/core';
import { MAIN_BACKGROUND_IMAGE } from 'src/app/utilities/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public MAIN_BACKGROUND_IMAGE: string = MAIN_BACKGROUND_IMAGE;

}
