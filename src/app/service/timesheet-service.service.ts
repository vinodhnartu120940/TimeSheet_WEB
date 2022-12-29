import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheetmodels } from '../models/timesheetmodels';
@Injectable({
  providedIn: 'root',
})
export class TimesheetServiceService {
  constructor(public http: HttpClient) {}
  //projectUrl: string = "http://192.168.1.254:7124/api/TimeSheets";
  projectUrl: string = 'https://localhost:7124/api/TimeSheets';
  projects: Timesheetmodels[] = [];

  saveProject() {

    return this.http.post(this.projectUrl, this.projects);
  }

  // //get task details
  // getTask() {
  //   return this.http.get(this.projectUrl)
  // }

  //get tasks
  getTask(empId: any, SelectedDate: any) {

    return this.http.get(`${this.projectUrl}/` + empId + '/' + SelectedDate);
  }

  getDate(empId: any) {
    return this.http.get(`${this.projectUrl}/` + empId);
  }
}
