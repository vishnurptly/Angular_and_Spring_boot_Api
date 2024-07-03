import { Routes } from '@angular/router';
import path from 'path';
import { CompanyTableComponent } from './company-table/company-table.component';
import { Component } from '@angular/core';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

export const routes: Routes = [
   {path:'Company',component:CompanyTableComponent},
   {path:'Employee',component:EmployeeTableComponent},
   {path:'CreateCompany',component:AddCompanyComponent},
   {path:'CreateEmployee',component:AddEmployeesComponent},
   {path:'EditEmployee',component:EmployeeEditComponent},
   {path:'EditCompany',component:CompanyEditComponent}
];


