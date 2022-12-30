import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { TimesheetComponent } from './components/timesheet/timesheet.component';



@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
