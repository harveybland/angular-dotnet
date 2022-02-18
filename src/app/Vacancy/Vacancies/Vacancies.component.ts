import { VacancyService } from './../vacancy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Vacancies',
  templateUrl: './Vacancies.component.html',
  styleUrls: ['./Vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies$ = this._vacanciesService.vacancies$

  constructor(private _vacanciesService: VacancyService) { }

  ngOnInit() {
    this._vacanciesService.getVacancies().subscribe();
  }

}
