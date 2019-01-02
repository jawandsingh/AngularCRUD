import { Employee } from "../models/employee.model";
import { Injectable } from "@angular/core";
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [{
        id: 1,
        name: 'Marko',
        gender: 'Male',
        email: 'mark@gmail.com',
        phoneNumber: 1232432424,
        contactPreference: 'Email',
        dateOfBirth: new Date("12/01/1985"),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/Mark.jpg'
    },
    {
        id: 1,
        name: 'Emili',
        gender: 'Female',
        email: 'ema@gmail.com',
        phoneNumber: 1232432424,
        contactPreference: 'Email',
        dateOfBirth: new Date("12/01/1988"),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/Maja.jpg'
    },
    {
        id: 1,
        name: 'Ann',
        gender: 'Female',
        email: 'novmbar@gmail.com',
        phoneNumber: 1232432424,
        contactPreference: 'Email',
        dateOfBirth: new Date("22/01/1978"),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/Ann.jpg'
    }
    ];

    getEmployees(): Employee[]{
        return this.listEmployees;
    }

    save(employee: Employee): void{
        this.listEmployees.push(employee);
    }
}