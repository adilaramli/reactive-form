import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'autoprefixer';
import { DropdownValues } from './case';



// decorator
@Component({
  // css selector
  selector: 'app-case', 
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})

export class CaseComponent implements OnInit {

  idTypeValue='NEW NRIC';
  showSuccessMsg:boolean=false;
  
  // options
  casestatus= caseStatusOpts
  casesource= caseSourceOpts
  
  // form control
  parentForm= new FormGroup({
    caseStatus :  new FormControl('',Validators.required),
    caseTitle :  new FormControl('',Validators.required),
    customerName :  new FormControl('',Validators.required),
    billAccountNo :  new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    idType :  new FormControl('NEW NRIC'),
    customerId :  new FormControl('',Validators.required),
    caseSourceId :  new FormControl('',Validators.required),
    serviceIdNo :  new FormControl('',Validators.required),
    nextBestAction :  new FormControl('assurance'),
    contactName :  new FormControl('',Validators.required),
    phoneNumber :  new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
    email :  new FormControl('',[Validators.required,Validators.email]),
    description_remark :  new FormControl('',Validators.required),
    effectiveDate :  new FormControl('',Validators.required),
    });
 
  constructor() { }
  ngOnInit(): void {
    
    
  }

  onSubmit(){
    //TODO: Use EventEmitter with form value
    console.log("Form Submitted!");
    console.warn(this.parentForm.value);
    this.showSuccessMsg=true;
    
    this.parentForm.reset();
    this.parentForm.patchValue({
      nextBestAction: 'assurance',
      idType:'NEW NRIC',
    })
  }

  resetForm() {
    this.parentForm.reset();
    this.parentForm.patchValue({
      nextBestAction: 'assurance',
      idType:'NEW NRIC',
    })
    
  }

}


//dropdown values
export const caseStatusOpts: DropdownValues[] = [
  { 'value': 5, 'name': 'Assigned' },
  { 'value': 6, 'name': 'In Progress' },
  { 'value': 1, 'name': 'New' },
  { 'value': 2, 'name': 'Unassigned' },
  { 'value': 7, 'name': 'Resolved' }
];

export const caseSourceOpts: DropdownValues[] = [
  { 'value': 1, 'name': 'unifi portal' },
  { 'value': 2, 'name': 'myunifi App ' },
  { 'value': 3, 'name': 'SPICE.AI' },
  { 'value': 4, 'name': 'mobile@unifi App' },
  { 'value': 7, 'name': 'HERO' },
  { 'value': 8, 'name': 'SPICE (RETEM)' },
];