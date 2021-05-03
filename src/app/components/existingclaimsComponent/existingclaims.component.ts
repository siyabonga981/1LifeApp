/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { api } from "../../sd-services/api";

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-existingclaims',
    templateUrl: './existingclaims.template.html'
})

export class existingclaimsComponent extends NBaseComponent implements OnInit {
    claims = [];
    claimsArray: any[];
    displayedColumns: string[] = ['claimNumber', 'policyNumber', 'eventDate', 'claimType', 'claimBy'];
    constructor(private api: api) {
        super();
    }

    ngOnInit() {
        this.getClients();
    }
    getClients(): any {
        this.api.getClients("clients").then(
            (res) => {
                let result = res.local.result;
                for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < result[i].existingClaims.length; j++) {
                        if (result[i].existingClaims[j]) {
                            this.claims.push(result[i].existingClaims[j]);
                        }
                    }
                    this.claimsArray = this.claims;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
