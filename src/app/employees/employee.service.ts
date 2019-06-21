import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateVM } from '../models/state.model';
import { CityVM } from '../models/city.model';
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Marko',
            gender: 'Male',
            dateOfBirth: new Date('12/01/1985'),
            surname: '1',
            city: null,
            State: null,
            CityDetails: null,
        },
        {
            id: 2,
            name: 'Emili',
            gender: 'Female',
            dateOfBirth: new Date('12/01/1988'),
            city: null,
            surname: '',
            State: null,
            CityDetails: null,
        },
        {
            id: 3,
            name: 'Ann',
            gender: 'Female',
            dateOfBirth: new Date('22/01/1988'),
            city: null,
            surname: '',
            State: null,
            CityDetails: null,
        }
    ];

    readonly baseUrl = 'http://localhost:55413/api/Patient/';
    constructor(private http: HttpClient) { }

    getEmployees(): Employee[] {
        debugger;
        this.listEmployees = [];
        this.http.get<Employee[]>(this.baseUrl + 'GetAllPatients').toPromise().then(s => {
            console.log(s);
            debugger;
            this.listEmployees = s;
        });
        debugger;
        return this.listEmployees;
    }

    save(employee: Employee): void {
        console.log(employee.city);
        console.log(employee.dateOfBirth);
        const postData = { 'FirstName': employee.name, 'LastName': employee.surname, 'DateOfBirth': employee.dateOfBirth, 'Gender': employee.gender, 'CityId': employee.city };
        this.http.post(this.baseUrl + 'CreatePatient', postData).subscribe(s => {
            console.log(s);
        });
    }

    getAllStates() {
        return this.http.get<StateVM[]>(this.baseUrl + 'GetStates');
    }

    getCitiesByStateId(stateId: number) {
        return this.http.get<CityVM[]>(this.baseUrl + 'GetCitiesByStateId?id=' + stateId);
    }
}
