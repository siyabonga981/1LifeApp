/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { searchComponent } from '../../components/searchComponent/search.component';
import { sessiondialogComponent } from '../../components/sessiondialogComponent/sessiondialog.component';



@Injectable()
export class methodsService {
    constructor(private router: Router, private search: searchComponent, private dialog: MatDialog) { }
    getUserFromSessionStorage() {
        if (sessionStorage.getItem('employee')) {
            return JSON.parse(sessionStorage.getItem('employee'));
        } else {
            this.dialog.open(sessiondialogComponent,  { disableClose: true });
        }
    }
    shareSearchComponentData() {
        return JSON.parse(localStorage.getItem('selectedPolicy'))
    }
}
