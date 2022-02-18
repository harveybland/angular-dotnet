import { EmployeeView } from './../employeeModel';
import { EmployeeService } from './../Employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-Create-edit-employee',
  templateUrl: './Create-edit-employee.component.html',
  styleUrls: ['./Create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute) { }

  employee: EmployeeView;
  country: string;
  county: string;
  postCode: string;
  street: string;

  ngOnInit() {
    this._activatedRoute.params.pipe(
      map(params => {
        return params['Id'] as number;
      }),
      switchMap(id => {
        return this.employeeService.getEmployee(id).pipe(tap(model => {
          this.employee = model;
          this.country = model.EmployeeAddress?.Country;
          this.street = model.EmployeeAddress?.Street
          this.county = model.EmployeeAddress?.County
          this.postCode = model.EmployeeAddress?.Postcode
        }))
      })).subscribe();
  }
}

