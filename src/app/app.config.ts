import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import { SharedServiceService } from '../app/Services/shared-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AppConfig {
  public config: Object | any;
  private env: Object | any;

  constructor(
    private http: HttpClient,
    // public shared: SharedServiceService,
    private _router: Router
  ) {}

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: Object) {
    return this.config[key.toString()];
  }

  /**
   * Use to get the data found in the first file (env file)
   */
  public getEnv(key: any) {
    return this.env[key];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  // public load() {
  //     return new Promise((resolve, reject) => {
  //         // this.http.get('env.json').map( res => res.json() ).catch((error: any):any => {
  //         //     console.log('Configuration file "env.json" could not be read');
  //         //     resolve(true);
  //         //     return Observable.throw(error.json().error || 'Server error');
  //         // }).subscribe( (envResponse) => {
  //         //     this.env = envResponse;
  //             let request:any = null;
  //             request = this.http.get('env.json');
  //             // switch (envResponse.env) {
  //             //     case 'production': {
  //             //         request = this.http.get('config.' + envResponse.env + '.json');
  //             //     } break;

  //             //     case 'development': {
  //             //         request = this.http.get('config.' + envResponse.env + '.json');
  //             //     } break;

  //             //     case 'default': {
  //             //         console.error('Environment file is not set or invalid');
  //             //         resolve(true);
  //             //     } break;
  //             // }

  //             if (request) {
  //                 request
  //                     .map( res => res.json() )
  //                     .catch((error: any) => {
  //                         console.error('Error reading configuration file');
  //                         resolve(error);
  //                         return Observable.throw(error.json().error || 'Server error');
  //                     })
  //                     .subscribe((responseData) => {
  //                         this.config = responseData;
  //                         resolve(true);
  //                     });
  //             } else {
  //                 console.error('Env config file "env.json" is not valid');
  //                 resolve(true);
  //             }
  //         });

  //    // });
  // }

  public load() {
    //   debugger;
    // const jsonFile = `/env.json`;
    // return new Promise<void>((resolve, reject) => {
    //   this.http
    //     .get(jsonFile)
    //     .toPromise()
    //     .then((response: any) => {
    //       this.config = <any>response;
    //       this.shared.sharedConfig = `${JSON.stringify(response)}`;
    //       console.log(this.config);
    //       resolve();
    //     })
    //     .catch((response: any) => {
    //       reject(
    //         `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
    //       );
    //     });
    // });

    this.http.get('assets/config/env.json').subscribe((response: any) => {
      this.config = <any>response;
      //   this.shared.sharedConfig = response;
      localStorage.setItem('envData', response);
      this._router.navigateByUrl('/landing');
    }),
      (_err: any) => {
        console.log(`Could not load file ': ${JSON.stringify(_err)}`);
      };
  }
}
