import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Employee/Employee.module').then(o => o.EmployeeModule),
  },
  {
    path: 'vacancies',
    loadChildren: () => import('./Vacancy/Vacancy.module').then(o => o.VacancyModule),
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
