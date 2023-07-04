import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  UserData: any[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton'},
    { value: 'Gucci', viewValue: 'Gucci'},
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];

  gender:any[]=[
    {male:"MALE"},
    {female:"FEMALE"}
  ]
  constructor(public sharedService:SharedServiceService) { }

  ngOnInit() {
  }

  heading(){
    
  }
  toggleTabs(tabName){
    
    if(tabName == "Applicant")
    {    
      document.getElementById("Loantab").style.display = "none";
      document.getElementById("Apptab").style.display = "block";
      document.getElementById("Appdiv").classList.add('active');
      document.getElementById("Loandiv").classList.remove('active');
    }
    else{
      document.getElementById("Loantab").style.display = "block";
      document.getElementById("Apptab").style.display = "none";
      document.getElementById("Loandiv").classList.add('active');
      document.getElementById("Appdiv").classList.remove('active');
    }
  }

}
