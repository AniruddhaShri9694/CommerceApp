import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

export interface datatype {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  usertodata: datatype[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton'},
    { value: 'Gucci', viewValue: 'Gucci'},
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];

  teamqueuedata: datatype[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton'},
    { value: 'Gucci', viewValue: 'Gucci'},
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];

  headerdata: any[] = [
    { value: 'Summary', viewValue: 'Summary Sheet',
      data:{
        "label1":"Application Number",
        "label2":"Loan Amount",
        "label3":"Primary Application",
        "label4":"Application Form Number",
        "label5":"Sourcing Branch Code",
        "label6":"Supporting Documents",
          "label11":"Application Number",
          "label12":"Primary Applicant",
          "label13":"Underwriting Decision",
          "label14":"Application Date",
          "label15":"Decision Date",
          "label16":"Applicant Name",
          "label17":"Application Stage",
          "label18":"Applicant",
          "label19":"Experian System Status",
          "label20":"Product Code",
          "label21":"Product Name",
          "label22":"Loan Amount",
          "label23":"Term",
    }},
    { value: 'Application', viewValue: 'Application'},
    { value: 'Underwriting', viewValue: 'Credit Evaluation and Sanction',
      data:{
            "label1":"Application Number",
            "label2":"Loan Amount",
            "label3":"Primary Application",
            "label4":"Application Form Number",
            "label5":"Sourcing Branch Code",
            "label6":"Supporting Documents",
      }},
    { value: 'WorkFlow', viewValue: 'WorkFlow' ,
      data:{
            "label1":"Application Number",
            "label2":"Loan Amount",
            "label3":"Primary Application",
            "label4":"Application Form Number",
            "label5":"Sourcing Branch Code",
            "label6":"Supporting Documents",
      }},
    { value: 'External Data', viewValue: 'External Data',
      data:{
            "label1":"Application Number",
            "label2":"Loan Amount",
            "label3":"Primary Application",
            "label4":"Application Form Number",
            "label5":"Sourcing Branch Code",
            "label6":"Supporting Documents",
            "label7":"External Verification",
      }},
    { value: 'Payments', viewValue: 'Payments' },
    { value: 'Other Information', viewValue: 'Other Information' },
    { value: 'Task', viewValue: 'Task' },
    { value: 'Documents', viewValue: 'Documents' },
    { value: 'Error Check List', viewValue: 'Error Check List' },
    { value: 'External Interface', viewValue: 'External Interface',
      data:{
            "label1":"Please check the Services to INVOKE",
            "label2":"Field Investigation",
            "label3":"Credit Verification Investigation",
            "label4":"Dedupe",
            "label5":"Experian",
            "label6":"ID Verification",
            "buttonLabel":"Invoke"
      }},
    { value: 'Sanction Condition', viewValue: 'Sanction Condition' },
    { value: 'Dedupe', viewValue: 'Dedupe' },
    { value: 'FI Verification', viewValue: 'FI Verification' },
    { value: 'RE FI Verification', viewValue: 'RE FI Verification' },
    { value: 'RCU Verification', viewValue: 'RCU Verification',
      data:{
            "label1":"RCU Verification",
            "label2":"RCU Status",
            "label3":"RCU Agency Code",
            "label4":"Comments"
      }},
    { value: 'Valuation Check', viewValue: 'Valuation Check' },
    { value: 'PD Check', viewValue: 'PD Check' },
    { value: 'Legal Verification', viewValue: 'Legal Verification' },
    { value: 'CAM Comment', viewValue: 'CAM Comment',
      data:{
            "label1":"CAM Comments",
            "label2":"Risk Category",
      }},
  ];


  constructor(public sharedService:SharedServiceService) { }

  ngOnInit() {
  }

}
