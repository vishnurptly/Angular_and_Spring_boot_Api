import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CompanyApiService } from '../company-api.service';
import { CompanyModels } from '../company-models';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { CompanyTableComponent } from '../company-table/company-table.component';

@Component({
  selector: 'app-company-edit',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent implements OnInit  {
  
  id!:String
  post!:CommonModule;
  userForm!:FormGroup;


  constructor(private dataService:CompanyApiService,private table:CompanyTableComponent){}

 
 

   ngOnInit(): void {
    

    this.userForm= new FormGroup({
      companyName: new FormControl('',[Validators.required]),
      mobileNumber: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      UnikCode: new FormControl('',[Validators.required])
    });
 
  }

  get f(){
    return this.userForm.controls;
  }
    
  
    comUpdate(){
    this.userForm.value;
    console.log(this.userForm.value);

    }




}
