import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CompanyApiService } from '../company-api.service';
import { CommonModule } from '@angular/common';
import { CompanyModels } from '../company-models';
import { Router } from 'express';
@Component({
  selector: 'app-company-table',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.css'
})
export class CompanyTableComponent implements OnInit {
  ngOnInit(): void {
    
  this.companyList();
  
  }
  companyl :any[]=[];
  
  constructor(private dataService:CompanyApiService){}
  companyList(){
   
    this.dataService.getCom().subscribe((res:any)=>{
      this.companyl=res;
      // console.log(res);
    })
 
  }

  deleteItem(id:String){

    this.dataService.deleteCom(id).subscribe(()=>{
      console.log("deleted");
      this.companyList();
      
    });
    
  }

  
  update(id:String){
    
   this.dataService.FetchedGet(id).subscribe((res:any)=>{
    this.companyl=res;
    console.log(res);
  });
   
    }

}
