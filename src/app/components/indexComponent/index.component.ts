/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { methodsService } from "../../services/methods/methods.service";
import { api } from '../../sd-services/api';
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
    selector: 'bh-index',
    templateUrl: './index.template.html'
})

export class indexComponent extends NBaseComponent implements OnInit {
    chartFuneralData: number[] = [];
    chartFuneralLabels: string[] = [];
    public doughnutChartData;
    public doughnutchartcolors;
    public doughnutChartLabels;
    public doughnutChartOptions;
    employee: any;
    claimDataSource;
    funeralDataSource;
    displayedColumns: string[] = ['status', 'count', 'value'];
    constructor(private _methodsService: methodsService, private api: api, private router: Router) {
        super();
    }

    ngOnInit() {
        this.getUser();
        this.claimDataSource = this.employee.lifeClaims;
        this.funeralDataSource = this.employee.funeralClaims;
        console.log(this.employee)
        this.getFuneralData();
    }
    getUser() {
        this.employee = this._methodsService.getUserFromSessionStorage();
    }

    getFuneralData() {
        for (let funeralAmount of this.funeralDataSource) {
            this.chartFuneralData.push(funeralAmount.value.slice(1).trim());
            this.chartFuneralLabels.push(funeralAmount.status);
        }
        this.doughnutChartData = [
            {
                data: this.chartFuneralData
            }
        ];

        this.doughnutchartcolors = [{
            backgroundColor: [
                '#48BCD6', 'limegreen', 'red', 'black'
            ]
        }];
        
        this.doughnutChartLabels = this.chartFuneralLabels

        this.doughnutChartOptions = {
            responsive: true
        };
    }
}

