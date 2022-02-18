import { EmployeeView } from './../Employee/employeeModel';

export interface Vacancy {
    Id: number;
    JobTitle?: string;
    InternalTitle?: string;
    ContractType?: string;
    Location?: string;
    Salary?: number;
    SalaryType?: string;
    BusinessArea?: string;
    Employee?: EmployeeView
}
