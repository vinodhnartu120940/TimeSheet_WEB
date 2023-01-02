import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

const routes: Routes = [
  {
    path:"timesheet",component:TimesheetComponent
  }
  ,{
    path:"profile",component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
