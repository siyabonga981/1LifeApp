/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { api } from 'app/sd-services/api';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-search',
    templateUrl: './search.template.html'
})

export class searchComponent extends NBaseComponent implements OnInit {
    displayedColumns: string[] = ['claimNumber', 'policyNumber', 'eventDate', 'claimType', 'claimBy'];
    policiesColumns: string[] = ['policyNumber', 'product', 'fullName', 'relationship', 'status', 'dateOfCancellation', 'riskType']
    searchResult: any;
    employee: any;
    searchForm: FormGroup;
    selectedPolicyForm: FormGroup;
    foundClaims: boolean = false;
    foundPolicies: boolean = false;
    isSubmitted: boolean = false;
    selectedPolicy: any;
    searchCriteria = [
        { viewValue: 'Claim Number', value: 'claimNumber' },
        { viewValue: 'Policy Number', value: 'policyNumber' },
        { viewValue: 'SA ID Number', value: 'idNumber' },
        { viewValue: 'Date of Birth', value: 'dob' }
    ];
    constructor(private router: Router, private formBuilder: FormBuilder, private api: api) {
        super();
        this.searchForm = this.formBuilder.group({
            searchCriteria: ['', [Validators.required]],
            searchPhrase: ['', [Validators.required]]
        });

        this.selectedPolicyForm = this.formBuilder.group({
            selectedPolicyF: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        this.getUser();
    }
    getUser() {
        if (sessionStorage.getItem('employee')) {
            this.employee = JSON.parse(sessionStorage.getItem('employee'));
        } else {
            alert('Please log in');
            this.router.navigate(['employeeLogin']);
        }
    }

    search(form) {
        this.isSubmitted = true;
        console.log(form.value)
        this.api.search('search', form.value)
            .then(res => {
                this.searchResult = res.local.result;
                if (this.searchResult[0].existingClaims.length > 0) {
                    this.foundClaims = true;
                }
                if (this.searchResult[0].policies.length) {
                    this.foundPolicies = true;
                }
            })

    }
    generateClaim(form) {
        localStorage.setItem('selectedPolicy', form.value.selectedPolicyF);
        this.router.navigate(['1Life/claims']);
    }
}
