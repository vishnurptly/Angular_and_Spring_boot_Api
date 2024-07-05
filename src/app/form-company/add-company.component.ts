import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyApiService } from '../company-api.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyModels } from '../company-models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent implements OnInit {

  ngOnInit(): void {
    
    this.activedrouter.params.subscribe(params=>{
      let editeId=params['id']
     
      if(editeId !=null){
        this.isUrlid=true
        this.companyId=editeId;
        this.getcom();
      }
    })
    
      
  }

    userForm: FormGroup=new FormGroup({
     companyName: new FormControl('',[Validators.required,Validators.pattern('')]),
     mobileNumber: new FormControl('',[Validators.required]),
     address: new FormControl('',[Validators.required,Validators.pattern('')]),
     unikCode: new FormControl('',[Validators.required])
   })
   constructor(private dataService:CompanyApiService,private activedrouter:ActivatedRoute,private router:Router){}

   isUrlid=false

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
companyId=''

getcom(){
  this.dataService.getbyid(this.companyId).subscribe(res=>{
    console.log(res );
    console.log("isUrlId="+this.isUrlid);
    
    this.userForm.patchValue(res)
  })
}

onUpdate(){
  this.dataService.updatecom(this.companyId,this.userForm.value).subscribe(res=>{
    console.log(res)
    this.router.navigate(['Company'])

  })
  
}

  
}
