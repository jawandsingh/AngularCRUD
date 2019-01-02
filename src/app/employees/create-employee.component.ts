import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 // gender = 'male';
 employee : Employee = {
  id: null,
  name: null,
  gender: null,
  email: '',
  phoneNumber: null,
  contactPreference: null,
  dateOfBirth: null,
  department: 'select',
  isActive: null,
  photoPath : null
 };
 datePickerConfig : Partial<BsDatepickerConfig>;
 dateOfBirth = new Date(2018,0,12);
 previewPhoto: boolean = false;
 departments: Department[] = [
   {id: 1, name: 'Help Desk'},
   {id: 2, name : 'HR'},
   {id: 3, name: 'IT'},
   {id: 4, name: 'Payroll'}
 ];
  constructor(private _employeeService: EmployeeService, 
              private _router: Router) { 
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
  })
  }

  togglePhotoPreview()
  {
    this.previewPhoto = !this.previewPhoto;
  }
  
  ngOnInit() {
  }
   
  saveEmployee(form: NgForm): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list'])
  }
}
