import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
//import { datatype } from '../mattab/mattab.component';

import {AppConfig} from '../../app.config'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  headername: any;
  toggelNotes:boolean = false;
  NoteFlag:boolean = true

  userto = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  teamqueue = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  usertodata: any[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton'},
    { value: 'Gucci', viewValue: 'Gucci'},
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];

  teamqueuedata: any[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton'},
    { value: 'Gucci', viewValue: 'Gucci'},
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];
  jsonData: any[]=[];
 
  constructor(private _http:HttpClient,public sharedService:SharedServiceService,public appConfig:AppConfig) { }

  headerdata: any[] = []
  ngOnInit() {}
}
