import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { APP_TITLE, MAIL_TO } from '../utilities/constants';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //     const isSubmitted = form && form.submitted;
    //     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    // }

    public yourName: FormControl;
    // public yourEmail: FormControl;
    public yourComments: FormControl;
    public matcher: any;

    constructor() { }

    ngOnInit() {
        this.yourName = new FormControl('', [
            Validators.required,
        ]);

        // this.yourEmail = new FormControl('', [
        //     Validators.required,
        //     Validators.email,
        // ]);

        this.yourComments = new FormControl('', [
            Validators.required,
        ]);

        this.matcher = new MyErrorStateMatcher();
    }

    submit(event) {
        event.preventDefault();

        if (!this.yourName.value || !this.yourComments.value) return;

        window.open(`
            mailto: ${MAIL_TO}
            ?subject=${APP_TITLE} - ${this.yourName.value}
            &body=${encodeURIComponent(this.yourComments.value)}
            `
            , '_blank'
        );

        this.yourName.setValue(null);
        this.yourComments.setValue(null);
    }

}
