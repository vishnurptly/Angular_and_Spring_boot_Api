import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {

   userForm: FormGroup;
   constructor(private formBuilder:FormBuilder){
    this.userForm =this.formBuilder.group({
      Name: new FormControl('',[Validators.required, Validators.minLength(8)]),
      employeeId: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]/')]),
      handlar: new FormControl('',[Validators.required]),
      company: new FormControl('',[Validators.required])
    })
}
 onSubmit(){
  console.log(this.userForm)
 }

}
