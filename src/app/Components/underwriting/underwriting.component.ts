import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-underwriting',
  templateUrl: './underwriting.component.html',
  styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {

  constructor(public sharedService:SharedServiceService) { }
  panelOpenState:Boolean= false;

  serviceData:any[]=[
    {"data":{
      "completness":"Completness",
      "passfailstatus":"Pass",
      "data1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data2":"Lorem",
      "data3":"Pass",
      "data4":"Lorem",
      "data11":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data21":"Lorem",
      "data31":"Pass",
      "data41":"Lorem"
    }},
  {"data":{
      "completness":"Completness1",
      "passfailstatus":"Fail",
      "data1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data2":"Lorem",
      "data3":"Pass",
      "data4":"Lorem",
      "data11":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data21":"Lorem",
      "data31":"Pass",
      "data41":"Lorem"
    }},
    {"data":{
      "completness":"Noncompletness",
      "passfailstatus":"Fail",
      "data1":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data2":"Lorem",
      "data3":"Pass",
      "data4":"Lorem",
      "data11":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt enim reprehenderit quas dolorum",
      "data21":"Lorem",
      "data31":"Pass",
      "data41":"Lorem"
    }}
  ]

  
  ngOnInit() {
    this.sharedService.adjusctionflag = true;
  }

}
