import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor(public sharedService:SharedServiceService) { }

  ngOnInit() {
  }

}
