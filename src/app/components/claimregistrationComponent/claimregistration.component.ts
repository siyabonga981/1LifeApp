/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-claimregistration',
    templateUrl: './claimregistration.template.html'
})

export class claimregistrationComponent extends NBaseComponent implements OnInit {
callerForm: FormGroup;
eventDetailsForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        super();
        this.createCallerForm();
        this.createEventDetailsForm();
    }

    ngOnInit() {

    }

        createCallerForm() {
        this.callerForm = this.formBuilder.group({
            title: ["", []],
            firstName: ["", []],
            surname: ["", []],
            initials: ["", []],
            idNumber: ["", []],
            dateOfBirth: ["", []],
            relationship: ["", []],
            gender: ["", []],
            cellNumber: ["", []],
            homeTelephone: ["", []],
            workTelephone: ["", []],
            faxNumber: ["", []],
            email: ["", []],
            communicationType: ["", []],
            isMainContact: ["", []],
            pointOfConnection: ["", []],
            street: ["", []],
            town: ["", []],
            city: ["", []],
            code: ["", []],
        })
    }

        createEventDetailsForm(){
        this.eventDetailsForm = this.formBuilder.group({
             eventCity: ["", []],
            eventTown: ["", []],
            eventProvince: ["", []],
            eventCode: ["", []],
            cause: ["", []],
            claimType: ["", []],
            causeComment: ["", []]
        })
    }
}
