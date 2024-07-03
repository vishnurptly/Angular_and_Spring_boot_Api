import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyApiService } from '../company-api.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyModels } from '../company-models';
@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {

  

    userForm: FormGroup=new FormGroup({
     companyName: new FormControl('',[Validators.required,Validators.pattern('')]),
     mobileNumber: new FormControl('',[Validators.required]),
     address: new FormControl('',[Validators.required,Validators.pattern('')]),
     UnikCode: new FormControl('',[Validators.required])
   })
   constructor(private dataService:CompanyApiService){}

onSave(){
  const userForm=this.userForm.value;
  const userValue= JSON.stringify(userForm);
  
  this.dataService.postCom(userValue).subscribe(response => {
    console.log('Response from server:', response);
    if (response.status === 200) {
      alert('Company Added Successfully');
      }
                    else {
                      alert('Error Occured');
                    }
                    console.log(response);
                
  });
  
}

  
}
