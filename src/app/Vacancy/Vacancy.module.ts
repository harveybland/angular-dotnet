import { ReactiveFormsModule } from '@angular/forms';
import { ThirdPartyModule } from './../modules/third-party/third-party.module';
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
    ThirdPartyModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VacancyComponent,
    VacanciesComponent,
    VacancyViewComponent
  ]
})
export class VacancyModule { }
