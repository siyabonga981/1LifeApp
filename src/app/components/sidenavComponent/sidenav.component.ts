/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { methodsService } from '../../services/methods/methods.service';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-sidenav',
    templateUrl: './sidenav.template.html'
})

export class sidenavComponent extends NBaseComponent implements OnInit {
    employee: any;
    hide: false;
    constructor(private _methodsService: methodsService) {
        super();
    }

    ngOnInit() {
        this.employee = this._methodsService.getUserFromSessionStorage();
    }
    toggleSearch(){
        // this.hide = true;
    }
}
