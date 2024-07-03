import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EmployeeModel } from '../employee-model';
import { CompanyApiService } from '../company-api.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit {

  ngOnInit(): void {
      this.employee();
  }
  employeeList:any[]=[];

  constructor(private dataSevice:CompanyApiService){}


employee(){
  this.dataSevice.getEmp().subscribe((res:any)=>{
    this.employeeList=res;
    // console.log(res);
  
});

}

empDelete( id: String){
  
  this.dataSevice.deleteEmp(id).subscribe(()=>{
    console.log("deleted");
    this.employee();
    
  })
  
}
}
