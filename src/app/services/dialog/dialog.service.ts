/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {logindialogComponent} from '../../components/logindialogComponent/logindialog.component';
@Injectable()
export class dialogService {
    password: string;
    constructor(private dialog: MatDialog) {
    }
    openDialog() {
        return this.dialog.open(logindialogComponent, { data: { loginStatus : '' }}).afterClosed();
    }
}
