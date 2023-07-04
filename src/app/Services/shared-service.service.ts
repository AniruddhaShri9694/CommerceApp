import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { regschema } from '../Components/registration/regschema';
import { respfromDB } from '../Components/registration/resp';
import { loginschema } from '../Components/login/loginschema';
import { LoginrespfrmDB } from '../Components/login/loginrespfrmDB';
import { menuschema } from '../Components/admin/Schemas/menuschema';
import { DialogalertComponent } from '../Components/dialogalert/dialogalert.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config';

declare const Test: any;

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService implements OnInit {
  userdata: any;
  menusch: menuschema | any;
  userloggedon: boolean = false;
  public cartdata: any[] = [];
  public jsonData: any[] = [];

  private newUser = new BehaviorSubject<any>({
    dishname: '',
    price: '',
  });

  public sharedConfig: Object | any;

  constructor(
    private _http: HttpClient,
    public dialog: MatDialog,
    public route: Router,
    public config: AppConfig
  ) {}

  ngOnInit() {
    // this._http
    //   .get('../env.json')
    //   .toPromise()
    //   .then((response: any) => {
    //     this.jsonData.push(response);
    //   });

    this.jsonData.push(localStorage.getItem('envData'));

    this.cartdata = [];
  }

  public register(data: regschema): Observable<any> {
    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');
    //headers1.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    const resp = this._http
      .post<respfromDB>(
        this.config.getConfig('PRODURL') + this.config.getConfig('registerAPI'),
        data,
        { headers: headers1 }
      )
      .pipe(
        map((responsefrmDB) => {
          return responsefrmDB;
        })
      );
    return resp;
  }

  public testApi2Api(): Observable<any> {
    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'GET');

    return this._http
      .get(this.config.getConfig('PRODURL').PRODURL + '/check', {
        headers: headers1,
      })
      .pipe(
        map((apiresponse) => {
          return apiresponse;
        })
      );
  }

  public login(logindetails: loginschema): Observable<any> {
    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');

    const loginresp = this._http
      .post<LoginrespfrmDB>(
        //this.config.getConfig('PRODURL').PRODURL + this.config.getConfig('PRODURL').loginAPI,
        this.config.getConfig('PRODURL') + this.config.getConfig('loginAPI'),
        logindetails,
        { headers: headers1 }
      )
      .pipe(
        map((loginrespfrmDB) => {
          if (loginrespfrmDB.status == '200') {
            this.userloggedon = true;
          }

          this.userdata = loginrespfrmDB;

          return loginrespfrmDB;
        }),
        catchError((error, caught) => {
          this.dialog.open(DialogalertComponent, {
            width: '650px',
            height: '160px',
            data: { Message: error.statusText, errorstatus: true },
            panelClass: 'custom-modalbox',
          });

          return error;
        })
      );
    return loginresp;
  }

  public addmenu(menusch: menuschema[]): Observable<any> {
    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');
    const menures1 = this._http
      .post(
        this.config.getConfig('PRODURL') + this.config.getConfig('addmenuAPI'),
        menusch,
        {
          headers: headers1,
        }
      )
      .pipe(
        map((menuresp) => {
          return menuresp;
        })
      );
    return menures1;
  }

  public fetchmenu(): Observable<any> {
    // this._http.get("../env.json").toPromise().then((response : any) => {
    //   this.jsonData.push(response)
    // })

    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'GET');

    //const menures1 = this._http.get("http://localhost:2000/api/listing/fetchmenu",{headers:headers1}).pipe(
    const menures1 = this._http
      .get(
        this.config.getConfig('PRODURL') + this.config.getConfig('fetchmenuAPI')
      )
      .pipe(
        map((menulistresp) => {
          return menulistresp;
        })
      );
    return menures1;
  }

  public deletemenu(dishname: any): Observable<any> {
    const headers1 = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    headers1.append('Access-Control-Request-Method', 'POST');

    const menures1 = this._http
      .post(
        this.config.getConfig('PRODURL') +
          this.config.getConfig('deletemenuAPI'),
        dishname,
        { headers: headers1 }
      )
      .pipe(
        map((menulistresp) => {
          return menulistresp;
        })
      );
    return menures1;
  }

  public logout(): void {
    this.userloggedon = false;
  }

  public setFilterdInfo(user: any) {
    this.newUser.next(user);
  }

  public getFilteredInfo() {
    return this.newUser.asObservable();
  }

  // public getdishtype(dishtype):Observable<any>{
  //   const headers1= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  //     headers1.append('Access-Control-Request-Method', 'POST');

  //     const dishresp = this._http.post(this.config.getConfig('PRODURL').PRODURL + "/getdishtype",dishtype,{headers:headers1}).pipe(
  //       map((menulistresp)=>{
  //         return menulistresp;
  //       })
  //     )
  //     return dishresp
  // }
}
