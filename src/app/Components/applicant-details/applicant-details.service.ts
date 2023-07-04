import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Personal } from './applicant-details.model';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json',
    //'Authorization': 'Basic ' + btoa('krsna:123'),
    //'urm-api-key' : 'c2VjcmV0'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsService {
  public url = "http://10.10.184.66:8034/domainValue/getLOV?screenName=PersonalDetails";

  constructor(public http:HttpClient) { }

  getAppDet(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.url,httpOptions)
      // .pipe(map((data:any)=> data.result),
      // catchError(error=>{
      //   return throwError('Data is not Fetched')
      // })
      // )
    // .map((res)=>{
    //   var perDetList = res;
    //   console.log(perDetList);
    // });
  }
  getSearch(): Observable<Personal[]>{
    return this.http.get<Personal[]>("http://10.10.184.66:8034/domainValue/getSearchLOV?screenName=ContactInfo&fieldName=Pincode&searchText=400",httpOptions)
  }
  getStateDet(): Observable<Personal[]>{
    return this.http.get<Personal[]>("http://10.10.184.66:8034/domainValue/getStateLOV?screenName=ApplicantDetails&country=India",httpOptions)
  }
  // getFilterdloandetails(filteredloandetails):Observable<RootObject>{
  //   // var headers=new HttpHeaders({'reportProgress': 'true','responseType': 'text'});
  //   // var token=null;
  
  //   // headers.append("Authentication-Token",token);
  //   // const httpOptions={headers:headers};
  //   const token=this.token.getToken();
  //   var detailedPoolFilterHeader =new HttpHeaders(
  //     {'Authorization':'Bearer '+ token,'realm':window.localStorage.getItem('realm'),
  //     'resourceName':window.localStorage.getItem('realmClientId')});
  //   const httpOptions={headers:detailedPoolFilterHeader};
  //   //  return this.http.post<RootObject>("http://172.17.146.68:8022/loanSearch/filter",filteredloandetails,httpOptions);
  //   // return this.http.post<RootObject>("http://172.17.146.57:8022/loanSearch/filter",filteredloandetails); 
  //   return this.http.post<RootObject>("http://10.10.184.66:8018/loan/search",filteredloandetails,httpOptions);
  // }

}
