import { StateVM } from './state.model';
import { CityVM } from './city.model';

export class Employee {
    id: number;
    name: string;
    surname: string;
    gender: string;
    dateOfBirth: Date;
    city: number;
    State: number;
    CityDetails: CityVM;
}
