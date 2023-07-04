import { Component, OnInit } from '@angular/core';
import { ApplicantReq } from './applicant-detailsrequest';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApplicantDetailsService } from './applicant-details.service';
import { Personal } from './applicant-details.model';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import {Pipe,PipeTransform} from "@angular/core";
import { DatePipe } from '@angular/common'



interface IncomeType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css'],
  providers: [ ApplicantDetailsService ]
})

export class ApplicantDetailsComponent implements OnInit {
  headers:HttpHeaders;
  job:any = null;
  public personal: Personal[];
  public search: Personal[];
  public stateDet:Personal[];
  myForm:FormGroup;
  applicantReq= new ApplicantReq();
  dataArr=[];
  refArr=[];
  relgOption:any[]=[];
  propShip:any[]=[];
  gendOption:any[]=[];
  ResdStat:any[]=[];
  stateOption:any[]=[];
  userName:string;
  hideshow:boolean=false;
  hideshow1:boolean=false;
  coflag:boolean=false;
  gflag:boolean=false;
  head:string;
  textColorFlag1:boolean=true;
  textColorFlag2:boolean=false;
  manageuserstyle:boolean=false;
  manageservicestyle:boolean=false;
  tab: string;
  MattabFlag:boolean;
  selectedItem: any;
  itemTypeSelected: any;
  addEnable: boolean= false;
  addEnable1:boolean=false;
  addSalaryError: any;
  perDetList:any;
  searchList:any;
  stateDetList:any;
  myDate: string;
  // panformcontrol = new FormControl('', [
  
  // ]);
  constructor( private fb: FormBuilder, public applicantDetailsService: ApplicantDetailsService, private http:HttpClient,public datePipe:DatePipe) {
    // this.myDate = new Date();
  }
  
  ngOnInit() {
    this.getAppDet();
    this.getSearch();
    this.getStateDet();
    this.Income();
    // this.relgOption = [];
    console.log('this.selectedItem');
    this.userName="Applicant";
    this.head="Personal Details";
    this.applicantReq=new ApplicantReq();
    this.dataArr.push(this.applicantReq);
    this.refArr.push(this.applicantReq);
    this.textColorFlag1=true;
    // this.manageuserstyle=true;
    // this.manageservicestyle=false;
    this.tab='First';
    if(this.tab=== 'First'){
      this.manageuserstyle=true;
      this.manageservicestyle=false;
      this.MattabFlag=true;
    }
    else{
      this.manageuserstyle=false;
      this.manageservicestyle=true;
      this.MattabFlag=false;
      //  this.manageservice();
    }
 
    this.myForm = new FormGroup({
      //   panformcontrol:this.panformcontrol,
    });
  }
  changenumber(){
   // debugger;
// this.job = Number(this.job.toLocaleString('en-GB'));
this.job = this.job.replace(',','');
this.job = (Math.round(this.job * 100) / 100).toLocaleString();//this.job.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatDate(ent){
    this.myDate = this.datePipe.transform(this.myDate, 'dd/MM/yyyy');
console.log(this.myDate)
  }
  

  public getAppDet(): void {
    this.applicantDetailsService.getAppDet().subscribe(personal => {
      if(personal){
        this.perDetList = personal;
        console.log("PersonalDetail List:",this.perDetList);
        this.populateDropdown();
      }
    });
  }
  public getSearch(): void{
    this.applicantDetailsService.getSearch().subscribe(search =>{
      if(search){
        this.searchList = search;
        console.log("Search List:",this.searchList);
        this.populateDropdownSrch();
      }
    })
  }
  public getStateDet(): void{
    this.applicantDetailsService.getStateDet().subscribe(stateDet =>{
      if(stateDet){
        this.stateDetList = stateDet;
        console.log("State Details List:",this.stateDetList);
        this.populateDropdownStat();
      }
    })
  }
  // perDetails: any =[
  //   {
  //     "lov": [
  //      {
  //     "fieldName": "Religion",
  //     "description": "Buddhism",
  //     "codeValue": "Buddhism"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Christianity",
  //     "codeValue": "Christianity"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Hinduism",
  //     "codeValue": "Hinduism"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Islam",
  //     "codeValue": "Islam"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Jainism",
  //     "codeValue": "Jainism"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Others",
  //     "codeValue": "Others"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Sikhism",
  //     "codeValue": "Sikhism"
  //      },
  //      {
  //     "fieldName": "Religion",
  //     "description": "Zoroastrianism",
  //     "codeValue": "Zoroastrianism"
  //      },
  //      {
  //     "fieldName": "ProprietorshipFlag",
  //     "description": "No",
  //     "codeValue": "N"
  //      },
  //      {
  //     "fieldName": "ProprietorshipFlag",
  //     "description": "Yes",
  //     "codeValue": "Y"
  //      },
  //      {
  //     "fieldName": "Gender",
  //     "description": "Male",
  //     "codeValue": "M"
  //      },
  //      {
  //     "fieldName": "Gender",
  //     "description": "Female",
  //     "codeValue": "F"
  //      },
  //      {
  //     "fieldName": "ResidentStatus",
  //     "description": "Resident and Ordinary Resident",
  //     "codeValue": "01"
  //      },
  //      {
  //     "fieldName": "ResidentStatus",
  //     "description": "Resident but Not Ordinary Resident",
  //     "codeValue": "02"
  //      }
  //      ],
  //     "status": "Success"
      
  //     }
  // ]
  populateDropdown(){
    for(var i=0;i<this.perDetList.lov.length; i++){
      if(this.perDetList.lov[i].fieldName == "Religion"){
        const description = {"description":this.perDetList.lov[i].description};
        this.relgOption.push(description);
        console.log("ReligionList:",this.relgOption);
      }
      if(this.perDetList.lov[i].fieldName == "ProprietorshipFlag"){
        const descriptionProp = {"description":this.perDetList.lov[i].description};
        this.propShip.push(descriptionProp);
        console.log("PropShipList:",this.propShip)
      }
      if(this.perDetList.lov[i].fieldName == "Gender"){
        const descriptionGend = {"description":this.perDetList.lov[i].description};
        this.gendOption.push(descriptionGend);
        console.log("GenderList:",this.gendOption)
      }
      if(this.perDetList.lov[i].fieldName == "ResidentStatus"){
        const descriptionResd = {"description":this.perDetList.lov[i].description};
        this.ResdStat.push(descriptionResd);
        console.log("ResidentList:",this.ResdStat)
      }
    }
  }
  populateDropdownSrch(){
    
  }
  populateDropdownStat(){
    for(var i=0;i<this.stateDetList.lov.length; i++){
      if(this.stateDetList.lov[i].fieldName == "State"){
        const stateDescription = {"description":this.stateDetList.lov[i].description};
        this.stateOption.push(stateDescription);
        console.log("StateList:",this.stateOption);
      }
    }
  }
  fatName(){
    var formDataFat = new FormData();
    if(document.getElementById('fatFirst')){
      formDataFat.append('name', 'fatFirst');
    }
    if(document.getElementById('fatMiddle')){
      formDataFat.append('name', 'fatMiddle');
    }
    if(document.getElementById('fatLast')){
      formDataFat.append('name', 'fatLast');
    }
    formDataFat.getAll('name');
    // return this.http.post('/myapi/Rest/personalDetails', Name, { headers: this.headers })
    // http://localhost:4000/api/create-user
    this.http.post('/myapi/Rest/personalDetails', formDataFat).subscribe(
      (response) => console.log(response)
    )
  }
  mothName(){
    var formDataMoth = new FormData();
    if(document.getElementById('mothFirst')){
      formDataMoth.append('name', 'mothFirst');
    }
    if(document.getElementById('mothMiddle')){
      formDataMoth.append('name', 'mothMiddle');
    }
    if(document.getElementById('mothLast')){
      formDataMoth.append('name', 'mothLast');
    }
    formDataMoth.getAll('name');
    this.http.post('/myapi/Rest/personalDetails', formDataMoth).subscribe(
      (response) => console.log(response)
    )
  }
  spouName(){
    var formDataSpou = new FormData();
    if(document.getElementById('spouFirst')){
      formDataSpou.append('name', 'spouFirst');
    }
    if(document.getElementById('spouMiddle')){
      formDataSpou.append('name', 'spouMiddle');
    }
    if(document.getElementById('spouLast')){
      formDataSpou.append('name', 'spouLast');
    }
    formDataSpou.getAll('name');
    this.http.post('/myapi/Rest/personalDetails', formDataSpou).subscribe(
      (response) => console.log(response)
    )
  }
  Income(){
    console.log(this.selectedItem);
    if(document.getElementById('incmType')){
      if(this.selectedItem == undefined){
        localStorage.removeItem("storeObject");
      }
      if(localStorage.getItem('storeObject') == undefined && this.selectedItem != undefined){
        localStorage.setItem('storeObject', JSON.stringify(this.selectedItem));
        console.log('Stored object in local storage:', JSON.stringify(this.selectedItem));
      }
    }
  }
  heading(i){
    if(i==1){
      this.head="Personal Details";
    }
    else if(i==2){
      this.head="Contact Info";
    }
    else if(i==3){
      this.head="Income Details";
    }
    else if(i==4){
      this.head="Bank Details"
    }
    else if(i==5){
      this.head="Repayment Track Record";
    }
  }
  hide(){
    // this.hideshow=!this.hideshow;
    this.dataArr.push(ApplicantReq);
    console.log(this.dataArr);
  }
  save(){
    // this.hideshow=!this.hideshow;
    // this.applicantReq=new ApplicantReq();
    // this.dataArr.push(this.applicantReq);
    console.log(this.dataArr);
  }

  gurantor(){
    this.hideshow=!this.hideshow;
  }
  addSalary(i){
    if(i==1){
      this.addEnable =!this.addEnable;
    }
    else if(i==2){
      this.addEnable1 =!this.addEnable1;
    }
    else if(i==3){
      this.cannotAdd();
    }
  }
  cannotAdd(){
    this.addSalaryError;
  }
  // cofun(){
  //   this.coflag=true;
  //   this.gflag=false;
  // }
  // gfun(){
  //   this.coflag=false;
  //   this.gflag=true;
  // }
  contactReference(){
    this.refArr.push(this.applicantReq);
  }
  manageUSerTextColor()
  {
    this.textColorFlag1 = true;
    this.textColorFlag2 = false;

  }
  manageServiceTextColor()
  {
    this.textColorFlag1 = false;
    this.textColorFlag2 = true;
  }

  manageusers(){
    this.tab="First";
    this.textColorFlag1=true;
    this.textColorFlag2=false;
    this.manageuserstyle=true;
    this.manageservicestyle=false;
    this.MattabFlag=true;
  }
  manageservice(){
    this.tab="Last";
    this.textColorFlag1 = false;
    this.textColorFlag2 = true;
    this.manageuserstyle=false;
    this.manageservicestyle=true;
    this.MattabFlag=false;
  }
  
  incomeTyps: IncomeType[] = [
    {value: 'salaried', viewValue: 'Salaried'},
    {value: 'allProfile', viewValue: 'All Profile'},
    {value: 'selfEmployed', viewValue: 'Self Employed'}
  ];
  
}
