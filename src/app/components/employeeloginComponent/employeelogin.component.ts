/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Output } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from '../../sd-services/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { logindialogComponent } from '../../components/logindialogComponent/logindialog.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-employeelogin',
    templateUrl: './employeelogin.template.html'
})

export class employeeloginComponent extends NBaseComponent implements OnInit {
    loginStatus: string;;
    imgUrl: string;
    employees: any[] = [];
    employeeLoginForm: FormGroup;
    constructor(private api: api, private dialog: MatDialog, private formBuilder: FormBuilder, private router: Router) {
        super();
        this.employeeLoginForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        this.getEmployees();
    }
    getEmployees() {
        this.api.getEmployees('getEmployees')
            .then(res => {
                this.employees = res.local.result;
                console.log(this.employees);
            })
    }
    loginUser(form) {
        let found = false;
        for (let i = 0; i < this.employees.length; i++) {
            if (form.value.email == this.employees[i].userDetails.username && form.value.password === this.employees[i].userDetails.password) {
                found = true;
                sessionStorage.setItem('employee', JSON.stringify(this.employees[i]));
                this.loginStatus = 'Successful';
                this.imgUrl = 'assets/img/success.svg';
                this.openDialog();
                this.router.navigate(['1Life/home']);
                break;
            }
        }
        if (!found) {
            this.loginStatus = 'Unsuccessful, try again';
            this.imgUrl = 'assets/img/cross.svg';
            this.openDialog();
        }
    }
    openDialog() {
        this.dialog.open(logindialogComponent, { data: { status: this.loginStatus, imgUrl: this.imgUrl } }).afterClosed();
    }
}
