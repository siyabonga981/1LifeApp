import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-tabletwoComponent
import { tabletwoComponent } from '../components/tabletwoComponent/tabletwo.component';
//CORE_REFERENCE_IMPORT-claimregistrationComponent
import { claimregistrationComponent } from '../components/claimregistrationComponent/claimregistration.component';
//CORE_REFERENCE_IMPORT-existingclaimsComponent
import { existingclaimsComponent } from '../components/existingclaimsComponent/existingclaims.component';
//CORE_REFERENCE_IMPORT-sessiondialogComponent
import { sessiondialogComponent } from '../components/sessiondialogComponent/sessiondialog.component';
//CORE_REFERENCE_IMPORT-updateemployeeComponent
import { updateemployeeComponent } from '../components/updateemployeeComponent/updateemployee.component';
//CORE_REFERENCE_IMPORT-usermaintenanceComponent
import { usermaintenanceComponent } from '../components/usermaintenanceComponent/usermaintenance.component';
//CORE_REFERENCE_IMPORT-logindialogComponent
import { logindialogComponent } from '../components/logindialogComponent/logindialog.component';
//CORE_REFERENCE_IMPORT-containerComponent
import { containerComponent } from '../components/containerComponent/container.component';
//CORE_REFERENCE_IMPORT-indexComponent
import { indexComponent } from '../components/indexComponent/index.component';
//CORE_REFERENCE_IMPORT-sidenavComponent
import { sidenavComponent } from '../components/sidenavComponent/sidenav.component';
//CORE_REFERENCE_IMPORT-methodsService
import { methodsService } from '../services/methods/methods.service';
//CORE_REFERENCE_IMPORT-claimsComponent
import { claimsComponent } from '../components/claimsComponent/claims.component';
//CORE_REFERENCE_IMPORT-searchComponent
import { searchComponent } from '../components/searchComponent/search.component';
//CORE_REFERENCE_IMPORT-dialogService
import { dialogService } from '../services/dialog/dialog.service';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboardComponent/dashboard.component';
//CORE_REFERENCE_IMPORT-employeeloginComponent
import { employeeloginComponent } from '../components/employeeloginComponent/employeelogin.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tabletwoComponent
tabletwoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claimregistrationComponent
claimregistrationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-existingclaimsComponent
existingclaimsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sessiondialogComponent
sessiondialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updateemployeeComponent
updateemployeeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-usermaintenanceComponent
usermaintenanceComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logindialogComponent
logindialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-containerComponent
containerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-indexComponent
indexComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sidenavComponent
sidenavComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claimsComponent
claimsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchComponent
searchComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
dashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employeeloginComponent
employeeloginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  searchComponent,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-methodsService
methodsService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-dialogService
dialogService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: '1Life', component: containerComponent,
children: [{path: 'home', component: indexComponent},{path: 'claims', component: claimsComponent},{path: 'search', component: searchComponent},{path: 'dashboard', component: dashboardComponent},{path: 'users', component: usermaintenanceComponent},{path: 'existingclaims', component: existingclaimsComponent},{path: 'claimregistration', component: claimregistrationComponent}]},{path: 'login', component: employeeloginComponent},{path: '', redirectTo: 'login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
