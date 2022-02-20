import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer)
  ],
  declarations: [
    HomePage
  ]
})

export class HomeModule { }
