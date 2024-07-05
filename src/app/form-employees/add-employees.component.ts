import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CompanyApiService } from '../company-api.service';

@Component({
  selector: 'app-add-employees',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './add-employees.component.html',
  styleUrl: './add-employees.component.css'
})
export class AddEmployeesComponent  {
 
 

  userForm: FormGroup=new FormGroup({
     Name: new FormControl('',[Validators.required, Validators.minLength(8)]),
     employeeId: new FormControl('',[Validators.required]),
     handlar: new FormControl('',[Validators.required]),
     company: new FormControl('',[Validators.required])
   });

   
     constructor(private dataService:CompanyApiService){}

 onSave(){
  const formvalue=this.userForm.value;
  const formdata=JSON.stringify(formvalue);

  console.log(formdata);

    this.dataService.postEmp(formdata).subscribe(response => {
      console.log('Response from server:', response);
    });
  

}

}