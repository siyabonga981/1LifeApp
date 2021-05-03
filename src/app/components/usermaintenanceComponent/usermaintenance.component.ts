/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from '../../sd-services/api';
import { MatDialog } from '@angular/material/dialog';
import { updateemployeeComponent } from '../../components/updateemployeeComponent/updateemployee.component';


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-usermaintenance',
    templateUrl: './usermaintenance.template.html'
})

export class usermaintenanceComponent extends NBaseComponent implements OnInit {
    employee;
    employees;
    updatedEmployee;
    displayedColumns: string[] = ['name', 'roleId', 'roleDescription', 'action'];
    employeeDatasource;
    constructor(private api: api, private dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        this.getEmployees();
        this.employee = JSON.parse(sessionStorage.getItem('employee'));
        this.employeeDatasource = this.employees;
    }
    getEmployees(): void {
        this.api.getEmployees('getEmployees')
            .then(res => {
                this.employees = res.local.result;
                this.employeeDatasource = this.employees;
            })
    }
    deleteEmployee(selectedEmployeeId): void {
        this.api.deleteEmployee('deleteEmployee', selectedEmployeeId)
            .then(res => {
                this.getEmployees();
            })
    }

    openDialog(employee) {
        this.dialog.open(updateemployeeComponent, { data: employee }).afterClosed()
            .subscribe(result => {
                this.updatedEmployee = {
                    "fullName": result.fullName,
                    "role": {
                        "id": result.roleId,
                        "description": result.roleDescription
                    },
                    "userDetails": {
                        "username": result.email,
                        "password": employee.password
                    },
                    "lifeClaims": employee.lifeClaims,
                    "funeralClaims": employee.funeralClaims
                }
                this.api.updateEmployee('updateEmployee', { id: employee._id, payload: this.updatedEmployee })
                    .then(res => {
                        console.log(res);
                        this.getEmployees();
                    })
            })

    }
}
