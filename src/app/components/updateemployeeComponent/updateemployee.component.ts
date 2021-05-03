/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from '../../sd-services/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/* 
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-updateemployee',
    templateUrl: './updateemployee.template.html'
})

export class updateemployeeComponent extends NBaseComponent implements OnInit {
    updateEmployeeForm: FormGroup;
    constructor(private api: api, private router: Router, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
        this.createUpdateForm();
    }

    ngOnInit() {
        this.updateEmployeeForm.patchValue({
            fullName: this.data.fullName,
            roleId: this.data.role.id,
            roleDescription: this.data.role.description,
            email: this.data.userDetails.username
        });
    }

    createUpdateForm() {
        this.updateEmployeeForm = this.formBuilder.group({
            fullName: ['', [Validators.required]],
            roleId: ['', [Validators.required]],
            roleDescription: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
        })
    }

    updateEmployee(form) {
        console.log(form.value);

    }
}
