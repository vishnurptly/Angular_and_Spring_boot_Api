import { Routes } from '@angular/router';
import path from 'path';
import { CompanyTableComponent } from './company-table/company-table.component';
import { Component } from '@angular/core';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddCompanyComponent } from './form-company/add-company.component';
import { AddEmployeesComponent } from './form-employees/add-employees.component';

export const routes: Routes = [
   {path:'Company',component:CompanyTableComponent},
   {path:'Employee',component:EmployeeTableComponent},
   {path:'Company/formCompany/:id',component:AddCompanyComponent},
   {path:'Employee/formEmployee/:id',component:AddEmployeesComponent},
   
];


