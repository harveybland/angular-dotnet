import { Vacancy } from './vacancyModel';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private _vacancies$ = new BehaviorSubject<Vacancy[]>([]);
  vacancies$ = this._vacancies$.asObservable();

  constructor(private http: HttpClient) { }

  getVacancies() {
    return this.http.get<Vacancy[]>('https://localhost:44346/api/Vacancy').pipe(map(resp => {
      console.log(resp)
      this._vacancies$.next(resp)
    }))
  }

  getVacancy(id: number) {
    return this.http.get<Vacancy>('https://localhost:44346/api/Vacancy/' + id)
  }

}
