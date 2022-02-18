import { ThirdPartyModule } from './../modules/third-party/third-party.module';
import { EmployeesComponent } from './Employees/Employees.component';
import { CreateEditEmployeeComponent } from './Create-edit-employee/Create-edit-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './Employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'employees/employeeView/:Id',
        component: CreateEditEmployeeComponent
      },
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeComponent,
    EmployeesComponent]
})
export class EmployeeModule { }
