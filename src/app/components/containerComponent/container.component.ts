/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { methodsService } from '../../services/methods/methods.service';
import { Router } from '@angular/router';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-container',
    templateUrl: './container.template.html'
})

export class containerComponent extends NBaseComponent implements OnInit, AfterViewInit {
    employee: any;
    hideSpinner:boolean = false;
    public hide = false;
    constructor(private _methodsService: methodsService, private router: Router) {
        super();
    }

    ngOnInit() {
        this.employee = this._methodsService.getUserFromSessionStorage();
        this.loadPageContent()
    }
    loadPageContent(){
        setTimeout(() => {
            this.hideSpinner = true;
        }, 3000)
    }
    ngAfterViewInit(){
        this.hideSpinner = false;
    }
    toggleSearch() {
        this.hide = !this.hide;
    }
    logout(){
        sessionStorage.removeItem('employee');
        this.router.navigate(['../login']);
    }
}
