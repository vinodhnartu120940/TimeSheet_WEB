import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { TimesheetServiceService } from '../service/timesheet-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timesheetcontent',
  templateUrl: './timesheetcontent.component.html',
  styleUrls: ['./timesheetcontent.component.css'],
})
export class TimesheetcontentComponent implements OnInit {
  taskData: FormGroup;
  datePipeString:any;

  //get task in database
  project: any;
  date: any;

  startDate: any;
  x: any = 0;
  isDisabled = false;
  taskView: boolean = true;

  constructor(
    public fb: FormBuilder,
    public service: TimesheetServiceService,
    private datePipe: DatePipe
  ) {
    
    this.taskData = this.fb.group({
      //create a itemrows control in formgroup
      date: ['00-00-0000'],
      empId: ['120941'],
      empName: ['Mahesh'],

      itemRows: this.fb.array([this.initItemRow()]),
    });
    // this.getTasts();
    this.getDate();
  }
  //save Project details

  ngOnInit(): void {}
  get itemRows() {
    return this.taskData.get('itemRows') as FormArray;
  }
  // hurs = this.taskData.value['itemRows'][0].startTime;
  clearForm(){
    this.itemRows.reset();
    this.x = 0;
  }

  initItemRow() {
    return this.fb.group({
      projectName: [''],
      activity: [''],
      task: [''],
      hours: [''],
    });
  }
  addForm() {
    // debugger;

    this.itemRows.push(this.initItemRow());
  }
  disabledInput(i: number) {
    console.log(i);
    this.isDisabled = true;
  }

  removeForm(i: number) {
    if (this.itemRows.length > 1) {
      this.inputValues1(i);
      this.itemRows.removeAt(i);
    }
  }
  getTasks(SelectedDate: any) {
  
    this.taskView = false;
    this.service
      .getTask(this.taskData.value['empId'], SelectedDate)
      .subscribe((data) => {
        this.project = data;
      });
  }
  //removeSubmitAlert
  removeSubmitAlert() {
    this.submitAlert = false;
  }
  submitAlert: boolean = false;
  saveTask() {
    var Data: any = [];
    for (let i = 0; i <= this.Empid; i++) {


      var projectData: any = {
        employeeID: this.taskData.value['empId'],
        employeeName: this.taskData.value['empName'],
        date: this.taskData.value['date'],
        projectName: this.taskData.value['itemRows'][i].projectName,
        activity: this.taskData.value['itemRows'][i].activity,
        task: this.taskData.value['itemRows'][i].task,
        workHours: this.taskData.value['itemRows'][i].hours,
      };
      Data.push(projectData);

      console.log(Data);
    }

    this.service.projects = Data;
    this.service.saveProject().subscribe((res) => {
      console.log('the task is succesfully created');
      this.getDate();
      this.submitAlert = true;
      this.taskData.reset();
      //this.itemRows.reset();
      this.taskData = this.fb.group({
        //create a itemrows control in formgroup
        date: ['00-00-0000'],
        empId: ['120941'],
        empName: ['Mahesh'],
  
        itemRows: this.fb.array([this.initItemRow()]),
      });
      this.x = 0;
      this.startDate.clearForm;  
      this.date.clearForm;
      //this.getTasks();
    });
    console.log(this.taskData.value);    

    // console.log(this.service.projects)

    // console.log(this.itemRows.length)
    // console.log('time difference' +)
  }
  //for view task

  disableButton() {
    let value = true;
  }
  Empid: any;
  inputValues(id: any) {
    this.Empid = id;

    for (let i = id; i <= id; i++) {
      this.x = this.x + this.taskData.value['itemRows'][i].hours;
    }
    console.log(this.x);

    // let y = this.taskData.value["itemRows"][id].hours + x;
  }
  inputValues1(id: any) {
    let y = this.x;
    // for (let i = id; i <= id; i++) {

    //   y = y - this.taskData.value["itemRows"][i].hours;

    // }
    this.x = y - this.taskData.value['itemRows'][id].hours;

    console.log(this.x);

    // let y = this.taskData.value["itemRows"][id].hours + x;
  }

  // viewData(){
  //   this.service.getTask(this.taskData.value['empId']).subscribe(data => {
  //     this.project = data;
  //   })
  // }

  getDate() {
    //debugger;
    this.service.getDate(this.taskData.value['empId']).subscribe((data) => {
      // console.log(data);
       this.date = data;
    }
    );
  }
}
