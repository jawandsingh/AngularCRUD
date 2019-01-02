import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() employee: Employee;
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit() {
  }

}
