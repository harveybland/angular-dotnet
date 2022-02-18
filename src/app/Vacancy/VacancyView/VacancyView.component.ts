import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from './../../Employee/Employee.service';
import { Vacancy } from './../vacancyModel';
import { VacancyService } from './../vacancy.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-VacancyView',
  templateUrl: './VacancyView.component.html',
  styleUrls: ['./VacancyView.component.scss']
})
export class VacancyViewComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    FirstName: new FormControl(null),
    LastName: new FormControl(null),
    Gender: new FormControl(null),
    EmployeeAddressId: new FormControl(null)
  });

  constructor(private _vacanciesService: VacancyService,
    private employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder) { }

  employees$ = this.employeeService.employees$

  vacancy: Vacancy;
  vacancyId: number;
  firstName: string;
  lastName: string;
  gender: string;

  ngOnInit() {
    this._activatedRoute.params.pipe(
      map(params => {
        return params['Id'] as number;
      }),
      switchMap(id => {
        this.vacancyId = id
        return this._vacanciesService.getVacancy(id).pipe(tap(model => {
          this.vacancy = model;
          this.firstName = model.Employee?.FirstName
          this.lastName = model.Employee?.LastName
          this.gender = model.Employee?.Gender

        }))
      })).subscribe();

    this.employeeService.getEmployees().subscribe()
  }

  addEmployee() {
    let model = this.employeeModel();
    this._vacanciesService.addEmployee(model).subscribe(data => {
      console.log(data)
    });
  }

  employeeModel() {
    return {
      FirstName: this.form.controls.FirstName.value,
      LastName: this.form.controls.LastName.value,
      Gender: this.form.controls.Gender.value,
      EmployeeAddressId: this.vacancyId
    }
  }

  apply() {

  }
}
