import { EmployeeService } from './../Employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Employees',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$ = this.employeeService.employees$

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe()
  }

}
