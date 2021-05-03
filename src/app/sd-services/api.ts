/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class api {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_api

  async addEmployee(key = '', payload: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          payload: payload,
        },
        local: {
          result: undefined,
          serverUrl: 'http://localhost:8081/api',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_BkgZof1ggHkQB343(bh);
      //appendnew_next_addEmployee
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            serverUrl: bh.local.serverUrl,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MSD0VaPLZd4h2UBy');
    }
  }

  async getEmployees(key = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_eph8xzq3fqJzx37V(bh);
      //appendnew_next_getEmployees
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y0CclfvrktMWNHnQ');
    }
  }

  async getClients(key = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_s0PuF4ojVrJSS6w9(bh);
      //appendnew_next_getClients
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OOqSWFK9VHus3Eer');
    }
  }

  async getBeneficiaries(key: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
        },
        local: {
          result: undefined,
          serverUrl: 'http://localhost:8081/api',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_02uIN05wL1jFgGvg(bh);
      //appendnew_next_getBeneficiaries
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
            serverUrl: bh.local.serverUrl,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PBvmaDyd2WTe1JuU');
    }
  }

  async deleteEmployee(key = '', id = '', ...others) {
    try {
      var bh = {
        input: {
          key: key,
          id: id,
        },
        local: {
          serverUrl: 'http://localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_e7tK7akvYxzbTugo(bh);
      //appendnew_next_deleteEmployee
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNhUQgbY7P6WX1of');
    }
  }

  async getClient(query: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          query: query,
        },
        local: {
          serverUrl: 'localhost://8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Lax9L3NpT0gKBpqf(bh);
      //appendnew_next_getClient
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJb30KX0FgO6ck1L');
    }
  }

  async search(key = '', payload: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          payload: payload,
        },
        local: {
          serverUrl: 'localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_VQxLo2G6Hj3F2OGn(bh);
      //appendnew_next_search
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BACJfUuAfpGQmjTb');
    }
  }

  async addNewClaim(key = '', payload: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          payload: payload,
        },
        local: {
          serverUrl: 'localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dnxAGMjQnyAn37Xp(bh);
      //appendnew_next_addNewClaim
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9RBtRIaOYxouBo1Y');
    }
  }

  async updateEmployee(key = '', payload: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          key: key,
          payload: payload,
        },
        local: {
          serverUrl: 'localhost:8081/api',
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ear59jA6yksB7c12(bh);
      //appendnew_next_updateEmployee
      return (
        // formatting output variables
        {
          input: {},
          local: {
            serverUrl: bh.local.serverUrl,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xmdO2fUaVTKN4HIK');
    }
  }

  //appendnew_flow_api_start

  async sd_BkgZof1ggHkQB343(bh) {
    try {
      let url = `${bh.local.serverUrl}/${bh.input.key}`;
      bh = await this.sd_pxvQY30SMeWvqKFE(bh);
      //appendnew_next_sd_BkgZof1ggHkQB343
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BkgZof1ggHkQB343');
    }
  }

  async sd_pxvQY30SMeWvqKFE(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addEmployee/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_pxvQY30SMeWvqKFE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pxvQY30SMeWvqKFE');
    }
  }

  async sd_eph8xzq3fqJzx37V(bh) {
    try {
      bh = await this.sd_Ty4BRRkAKPz1NQvD(bh);
      //appendnew_next_sd_eph8xzq3fqJzx37V
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eph8xzq3fqJzx37V');
    }
  }

  async sd_Ty4BRRkAKPz1NQvD(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getEmployees/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Ty4BRRkAKPz1NQvD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ty4BRRkAKPz1NQvD');
    }
  }

  async sd_s0PuF4ojVrJSS6w9(bh) {
    try {
      bh = await this.sd_y66WcqbSxa1k7mcW(bh);
      //appendnew_next_sd_s0PuF4ojVrJSS6w9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s0PuF4ojVrJSS6w9');
    }
  }

  async sd_y66WcqbSxa1k7mcW(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `clients/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_y66WcqbSxa1k7mcW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y66WcqbSxa1k7mcW');
    }
  }

  async sd_02uIN05wL1jFgGvg(bh) {
    try {
      bh = await this.sd_aSPK7E8ZguJjpbJr(bh);
      //appendnew_next_sd_02uIN05wL1jFgGvg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_02uIN05wL1jFgGvg');
    }
  }

  async sd_aSPK7E8ZguJjpbJr(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `beneficiaries/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_aSPK7E8ZguJjpbJr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aSPK7E8ZguJjpbJr');
    }
  }

  async sd_e7tK7akvYxzbTugo(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteEmployee/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_e7tK7akvYxzbTugo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e7tK7akvYxzbTugo');
    }
  }

  async sd_Lax9L3NpT0gKBpqf(bh) {
    try {
      console.log(bh);
      bh.local.query =
        bh.input.query.searchCriteria + '=' + bh.input.query.searchPhrase;

      var res = [];
      for (var x in bh.input.query) {
        bh.input.query.hasOwnProperty(x) && res.push(bh.input.query[x]);
      }
      console.log(res);
      res.pop();

      const arr = res.reduce((acc, curr) => ((acc[curr] = ''), acc), {});
      console.log(arr);

      arr[res[0]] = bh.input.query['searchPhrase'];

      console.log(arr);
      bh.input.query = arr;
      bh = await this.sd_A4Tr87T7ugxPfmZv(bh);
      //appendnew_next_sd_Lax9L3NpT0gKBpqf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lax9L3NpT0gKBpqf');
    }
  }

  async sd_A4Tr87T7ugxPfmZv(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getClient/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: bh.input.query,
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_A4Tr87T7ugxPfmZv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A4Tr87T7ugxPfmZv');
    }
  }

  async sd_VQxLo2G6Hj3F2OGn(bh) {
    try {
      console.log(bh.input.payload);
      bh.input.payload = {
        searchCriteria: bh.input.payload.searchCriteria,
        searchPhrase: bh.input.payload.searchPhrase,
      };
      bh = await this.sd_MeAXUOgOLpTjzDOe(bh);
      //appendnew_next_sd_VQxLo2G6Hj3F2OGn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VQxLo2G6Hj3F2OGn');
    }
  }

  async sd_MeAXUOgOLpTjzDOe(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `search/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_MeAXUOgOLpTjzDOe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MeAXUOgOLpTjzDOe');
    }
  }

  async sd_dnxAGMjQnyAn37Xp(bh) {
    try {
      console.log(bh.input.payload);
      bh.input.payload = {
        id: bh.input.payload.id,
        data: bh.input.payload,
      };
      bh = await this.sd_0xrv7BJ4kFxVcuWP(bh);
      //appendnew_next_sd_dnxAGMjQnyAn37Xp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dnxAGMjQnyAn37Xp');
    }
  }

  async sd_0xrv7BJ4kFxVcuWP(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addNewClaim/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_0xrv7BJ4kFxVcuWP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0xrv7BJ4kFxVcuWP');
    }
  }

  async sd_ear59jA6yksB7c12(bh) {
    try {
      console.log(bh.input.payload);
      bh.input.payload = {
        id: bh.input.payload.id,
        data: bh.input.payload,
      };
      bh = await this.sd_qYVVXZpbwHPlNsIu(bh);
      //appendnew_next_sd_ear59jA6yksB7c12
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ear59jA6yksB7c12');
    }
  }

  async sd_qYVVXZpbwHPlNsIu(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateEmployee/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_qYVVXZpbwHPlNsIu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qYVVXZpbwHPlNsIu');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_api_Catch
}
