import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Employee, EmployeeView } from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employees$ = new BehaviorSubject<Employee[]>([]);
  employees$ = this._employees$.asObservable();

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>('https://localhost:44346/api/Employee').pipe(map(resp => {
      this._employees$.next(resp)
    }))
  }

  getEmployee(id: number) {
    return this.http.get<EmployeeView>('https://localhost:44346/api/Employee/' + id)
  }

  createEmployee() {

  }

  deleteEmployee() {

  }

}
