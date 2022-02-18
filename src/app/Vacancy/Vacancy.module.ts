import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyComponent } from './Vacancy.component';
import { VacanciesComponent } from './Vacancies/Vacancies.component';
import { VacancyViewComponent } from './VacancyView/VacancyView.component';

const routes: Routes = [
  {
    path: '',
    component: VacancyComponent,
    children: [
      {
        path: 'vacancies',
        component: VacanciesComponent
      },
      {
        path: 'vacancies/vacancyView/:Id',
        component: VacancyViewComponent
      },
      {
        path: '',
        redirectTo: 'vacancies',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VacancyComponent,
    VacanciesComponent,
  ]
})
export class VacancyModule { }
