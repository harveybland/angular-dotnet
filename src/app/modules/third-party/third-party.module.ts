import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [

  ],
  exports: [
    NgSelectModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class ThirdPartyModule { }
