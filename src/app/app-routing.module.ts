import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TimesheetcontentComponent } from './timesheetcontent/timesheetcontent.component';

const routes: Routes = [
  {
    path:"timesheet",component:TimesheetcontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
