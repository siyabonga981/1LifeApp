/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    selector: 'bh-logindialog',
    templateUrl: './logindialog.template.html'
})

export class logindialogComponent extends NBaseComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
        super();
    }

    ngOnInit() {
    }
}
