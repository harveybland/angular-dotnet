import { EmployeeService } from './../../Employee/Employee.service';
import { Vacancy } from './../vacancyModel';
import { VacancyService } from './../vacancy.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-VacancyView',
  templateUrl: './VacancyView.component.html',
  styleUrls: ['./VacancyView.component.scss']
})
export class VacancyViewComponent implements OnInit {

  constructor(private _vacanciesService: VacancyService,
    private employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute) { }

  employees$ = this.employeeService.employees$

  vacancy: Vacancy;

  ngOnInit() {
    this._activatedRoute.params.pipe(
      map(params => {
        return params['Id'] as number;
      }),
      switchMap(id => {
        return this._vacanciesService.getVacancy(id).pipe(tap(model => {
          this.vacancy = model;
        }))
      })).subscribe();
  }
}
