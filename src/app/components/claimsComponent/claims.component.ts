/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from "@angular/core";
import { NBaseComponent } from "../../../../../app/baseClasses/nBase.component";
import { methodsService } from "../../services/methods/methods.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { api } from "../../sd-services/api";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
import { searchComponent } from '../searchComponent/search.component';
*/

@Component({
    selector: "bh-claims",
    templateUrl: "./claims.template.html",
})
export class claimsComponent extends NBaseComponent implements OnInit {
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    employee: any;
    idNum: string;
    claimsForm: FormGroup;
    eventDetailsForm: FormGroup;
    clients: any;
    beneficiaries: any;
    beneficiary: any;
    selectedPolicy: any;
    newClaimNumber: string;
    changeInput = false;
    titles = [
        { title: "Mr", value: "Mr" },
        { title: "Mrs", value: "Mrs" },
        { title: "Ms", value: "Ms" },
        { title: "Dr", value: "Dr" },
        { title: "Gen", value: "Gen" },
        { title: "Adv", value: "Adv" },
    ];
    relationship = [
        { title: "Mother", value: "Mother" },
        { title: "Father", value: "Father" },
        { title: "Brother", value: "Brother" },
        { title: "Sister", value: "Sister" },
        { title: "Daughter", value: "Daughter" },
        { title: "Son", value: "Son" },
        { title: "Aunt", value: "Aunt" },
        { title: "Uncle", value: "Uncle" },
        { title: "Partner", value: "Partner" },
    ];
    constructor(
        private _methodsService: methodsService,
        private formBuilder: FormBuilder,
        private api: api,
        private router: Router, private snackBar: MatSnackBar
    ) {
        super();
        this.createBeneficiaryForm();
        this.createEventDetailsForm();
    }

    ngOnInit() {
        this.selectedPolicy = JSON.parse(localStorage.getItem('selectedPolicy'));
        this.employee = this._methodsService.getUserFromSessionStorage();
        this.getClients();
        this.getNextClaimNumber();
        console.log(this.selectedPolicy);
        this.onSelect('');
    }

    saveClaim(person, event) {
        console.log(person);
        console.log(event);
        let claimObj = {
            "claimNumber": this.newClaimNumber,
            "policyNumber": this.selectedPolicy.idNumber,
            "capturedBy": this.employee.fullName,
            "status": "New",
            "event": {
                "date": new Date().toDateString().slice(4, 16),
                "city": event.value.eventCity,
                "town": event.value.eventTown,
                "province": event.value.eventProvince,
                "code": event.value.eventCode
            },
            "claim": {
                "madeBy": person.value.firstName.fullName,
                "type": event.value.claimType,
                "cause": event.value.cause,
                "comment": event.value.causeComment
            }
        }
        this.selectedPolicy.existingClaims.push(claimObj);
        this.api.addNewClaim('addNewClaim', this.selectedPolicy)
            .then(res => {
                if (res) {
                    localStorage.setItem('selectedPolicy', JSON.stringify(this.selectedPolicy))
                    this.snackBar.open('Claim saved succesfully', 'Dismiss', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });
                    setTimeout(() => {
                        this.router.navigate(['./1Life/existingclaims']);
                    }, 5000);
                } else {
                    this.snackBar.open('Claim could not be saved', 'Dismiss', {
                        duration: 3500,
                        horizontalPosition: this.horizontalPosition,
                        verticalPosition: this.verticalPosition,
                    });
                }
            })
    }

    onIdFocusOut(event: Event) {
        this.idNum = (event.target as HTMLInputElement).value;

        let currentYear = new Date().getFullYear();

        let year;
        let month = this.idNum.slice(2, 4);
        let day = this.idNum.slice(4, 6);
        if (this.idNum.toString().slice(0, 2) > currentYear.toString().slice(3)) {
            year = `19` + this.idNum.slice(0, 2);
        } else {
            year = `20` + this.idNum.slice(0, 2);
        }
        let dob = month + '/' + day + '/' + year;
        if (Number(this.idNum.slice(10, 11)) !== 0) {
            return false;
        } else {
            if (this.idNum.charAt(6) !== null) {
                this.claimsForm.patchValue({
                    dateOfBirth: new Date(dob)
                });
                if (this.idNum.charAt(6) !== null) {
                    if (this.idNum.charAt(6) < '5') {
                        this.claimsForm.patchValue({
                            gender: "Female"
                        });
                    } else {
                        this.claimsForm.patchValue({
                            gender: "Male"
                        });
                    }
                }
            }
        }
    }
    getClients(): any {
        this.api.getClients("clients").then(
            (res) => {
                this.clients = res.local.result;
                console.log(this.clients);
            },
            (err) => {
                console.log(err);
            }
        );
    }


    onSelect(event) {
        this.claimsForm.get('firstName').valueChanges.subscribe(data => {
            if (data != null) {
                this.beneficiary = data;
                this.populateForm();
            }
        })
    }

    getNextClaimNumber() {
        let claimNumbers = [];
        for (let i = 0; i < this.selectedPolicy.existingClaims.length; i++) {
            claimNumbers.push(Number(this.selectedPolicy.existingClaims[i].claimNumber.split('-').pop()));
        }
        if (!claimNumbers.length) {
            this.newClaimNumber = this.selectedPolicy.idNumber + '-' + Number("1")
        } else {
            this.newClaimNumber = this.selectedPolicy.idNumber + '-' + (Number(Math.max(...claimNumbers)) + Number("1"));
        }
        console.log(claimNumbers)
    }

    addContact() {
        this.formReset();
        this.changeInput = true;
    }

    formReset() {
        this.claimsForm.reset();
    }

    changeSelectInput() {
        this.changeInput = false;
    }

    saveBeneficiary(form) {
        let beneficiaryObj =
        {
            "title": form.value.title,
            "fullName": `${form.value.firstName} ${form.value.surname}`,
            "idNumber": form.value.idNumber,
            "dob": form.value.dateOfBirth,
            "address": {
                "street": form.value.street,
                "town": form.value.town,
                "city": form.value.city,
                "code": form.value.code
            },
            "contact": {
                "cell": form.value.cellNumber,
                "email": form.value.email,
                "homeTelephone": form.value.homeTelephone,
                "workTelephone": form.value.workTelephone,
                "faxNumber": form.value.faxNumber,
                "communicationType": form.value.communicationType,
                "mainContact": form.value.isMainContact
            },
            "relationship": form.value.relationship,
            "gender": form.value.gender,
        };
        this.selectedPolicy.policies[0].beneficiaries.push(beneficiaryObj);
        this.api.addNewClaim('addNewClaim', this.selectedPolicy)
            .then(res => {
                localStorage.setItem('selectedPolicy', JSON.stringify(this.selectedPolicy));
                this.formReset();
                this.changeSelectInput();
                this.onSelect('');
                this.snackBar.open('Beneficiary added succesfully', 'Dismiss', {
                    duration: 3500
                });
            })
    }
    populateForm() {
        this.beneficiary.dateOfBirth = new Date(this.beneficiary.dob);
        let firstName = this.beneficiary.fullName.split(' ')[0];
        let lastName = this.beneficiary.fullName.split(' ')[1]
        this.claimsForm.patchValue({
            title: this.beneficiary.title,
            surname: lastName,
            initials: `${firstName[0]}${lastName[0]}`,
            idNumber: this.beneficiary.idNumber,
            dateOfBirth: this.beneficiary.dateOfBirth,
            relationship: this.beneficiary.relationship,
            gender: this.beneficiary.gender,
            cellNumber: this.beneficiary.contact.cell,
            homeTelephone: this.beneficiary.contact.homeTelephone,
            workTelephone: this.beneficiary.contact.workTelephone,
            faxNumber: this.beneficiary.contact.faxNumber,
            email: this.beneficiary.contact.email,
            communicationType: this.beneficiary.contact.communicationType,
            isMainContact: this.beneficiary.contact.mainContact,
            street: this.beneficiary.address.street,
            town: this.beneficiary.address.town,
            city: this.beneficiary.address.city,
            code: this.beneficiary.address.code
        })
    }

    createBeneficiaryForm() {
        this.claimsForm = this.formBuilder.group({
            title: ["", [Validators.required]],
            firstName: ["", [Validators.required]],
            surname: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            initials: ["", [Validators.pattern('[a-zA-Z ]*')]],
            idNumber: ["", [Validators.required, Validators.minLength(13), Validators.pattern('^[0-9]+$')]],
            dateOfBirth: ['', []],
            relationship: ["", [Validators.required]],
            gender: ["", [Validators.required]],
            cellNumber: ["", [Validators.required, Validators.maxLength(12),]],
            homeTelephone: [""],
            workTelephone: [""],
            faxNumber: [""],
            email: ["", [Validators.required, Validators.email]],
            communicationType: ["", [Validators.required]],
            isMainContact: ["", [Validators.required]],
            street: ["", [Validators.required]],
            town: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            city: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            code: ["", [Validators.required]]
        })
    }

    createEventDetailsForm() {
        this.eventDetailsForm = this.formBuilder.group({
            street: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_ ]*[a-zA-Z0-9_]$')]],
            eventCity: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            eventTown: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            eventProvince: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            eventCode: ["", [Validators.required]],
            claimType: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        })
    }
}