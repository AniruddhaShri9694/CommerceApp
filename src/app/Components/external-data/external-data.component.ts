import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import {valuationCheckData} from "./valuationCheck"

export interface datatype {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-external-data',
  templateUrl: './external-data.component.html',
  styleUrls: ['./external-data.component.css']
})
export class ExternalDataComponent implements OnInit {

  user_data;
  valuationData:valuationCheckData;

  constructor(public sharedService:SharedServiceService) { }

  userList: any = [
    {
      'value': 'Gucci',
    },
    {
      'value': 'Prada',
    },
    {
      'value': 'Chanel',
    }
  ];
  
    VALUATIONCHECKDATA:any = [
      { 
        status: "Success",
        valuations: [
        {
            collaterals: [
                {
                  "item":"RING",
                  "noOfItems": "3",
                  "grossWt": "1.6",
                  "deductions": "4.0",
                  "netWt": "2.0",
                  "carat": "4.0",
                  "rpg":"28000",
                  "valuation": "4.2"
                },
                {
                  "item":"EAR RING",
                  "noOfItems": "3",
                  "grossWt": "1.6",
                  "deductions": "4.0",
                  "netWt": "2.0",
                  "carat": "4.0",
                  "rpg":"28000",
                  "valuation": "4.2"
                },
                {
                "item":"Necklace",
                "noOfItems": "3",
                "grossWt": "1.6",
                "deductions": "4.0",
                "netWt": "2.0",
                "carat": "4.0",
                "rpg":"28000",
                "valuation": "4.2"
              },
              {
              "item":"Mangal Sutra",
              "noOfItems": "3",
              "grossWt": "1.6",
              "deductions": "4.0",
              "netWt": "2.0",
              "carat": "4.0",
              "rpg":"28000",
              "valuation": "4.2"
              },
              {
              "item":"Nose Ring",
              "noOfItems": "3",
              "grossWt": "1.6",
              "deductions": "4.0",
              "netWt": "2.0",
              "carat": "4.0",
              "rpg":"28000",
              "valuation": "4.2"
            },
            ],
            totalValuation:"21"
        },
        {
          collaterals: [
              {
                "item":"RING",
                "noOfItems": "3",
                "grossWt": "1.6",
                "deductions": "4.0",
                "netWt": "2.0",
                "carat": "4.0",
                "rpg":"28000",
                "valuation": "4.2"
              },
              {
                "item":"EAR RING",
                "noOfItems": "3",
                "grossWt": "1.6",
                "deductions": "4.0",
                "netWt": "2.0",
                "carat": "4.0",
                "rpg":"28000",
                "valuation": "4.2"
              },
              {
              "item":"Necklace",
              "noOfItems": "3",
              "grossWt": "1.6",
              "deductions": "4.0",
              "netWt": "2.0",
              "carat": "4.0",
              "rpg":"28000",
              "valuation": "4.2"
            },
            {
            "item":"Mangal Sutra",
            "noOfItems": "3",
            "grossWt": "1.6",
            "deductions": "4.0",
            "netWt": "2.0",
            "carat": "4.0",
            "rpg":"28000",
            "valuation": "4.2"
            },
            {
            "item":"Nose Ring",
            "noOfItems": "3",
            "grossWt": "1.6",
            "deductions": "4.0",
            "netWt": "2.0",
            "carat": "4.0",
            "rpg":"28000",
            "valuation": "4.2"
          }
          ],
          totalValuation:"21"
      }],
        message: null
      }
    ]

    // calnetwt(i,j){
      
    //   var sum = Number((<HTMLInputElement>document.getElementById("fld"+i+2+j)).value) - Number((<HTMLInputElement>document.getElementById("fld"+i+3+j)).value)
    //   var element = document.getElementById("fld"+i+4+j)
    //   element.setAttribute("value",sum.toString())

    //   var valuation = Number((<HTMLInputElement>document.getElementById("fld"+i+4+j)).value) * Number((<HTMLInputElement>document.getElementById("fld"+i+6+j)).value)
    //   var element1 = document.getElementById("fld"+i+7+j)
    //   element1.setAttribute("value",valuation.toString())

    //   var totalvaluation  = 0;

    //   var element2 = document.getElementById("totalvaluation"+i)

    //   for (let m = 0; m < this.VALUATIONCHECKDATA[0].valuations[0].collaterals.length; m++) {
    //     totalvaluation = Number(totalvaluation) +Number((<HTMLInputElement>document.getElementById("fld"+i+7+m)).value);
    //   }

    //   element2.setAttribute("value",totalvaluation.toString())

    // }
x
  ngOnInit() {
    let valuationData:valuationCheckData 
    console.log(valuationData);
    // this.sharedService.fetchvaluationcheckdata().subscribe(()=>{
    // })
  }
}
