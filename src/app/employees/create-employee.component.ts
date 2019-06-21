import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { StateVM } from '../models/state.model';
import { CityVM } from '../models/city.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  private allStates: StateVM[];
  private allCities: CityVM[];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    dateOfBirth: null,
    surname: null,
    city: null,
    State: null,
    CityDetails: null,
  };
  stateId: any;
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth = new Date();
  minDate: Date;

  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY',
      minDate: this.minDate,
      maxDate: new Date(),
    })
  }

  ngOnInit() {
    this.FillStateDDL();
  }

  FillStateDDL() {
    this._employeeService.getAllStates().subscribe(s => {
      this.allStates = s;
    });
  }
  FillCityDDL() {
    console.log(this.stateId);
    if (this.stateId == 'select') {
      this.allCities = [];
      return;
    }
    this._employeeService.getCitiesByStateId(this.stateId).subscribe(s => {
      this.allCities = s;
    });
  }

  saveEmployee(form: NgForm): void {
    this.employee.dateOfBirth = form.value["dateOfBirth"];

    this._employeeService.save(this.employee);
    this._router.navigate(['list'])
  }

  onDateChange() {
    console.log("value is " + this.dateOfBirth);
    var now = new Date();
    var ageDifMs = now.getTime() - this.dateOfBirth.getTime();
    var ageDate = new Date(ageDifMs);
    var result = Math.abs(ageDate.getUTCFullYear() - 1970);

    console.log(result);  

  }
}
