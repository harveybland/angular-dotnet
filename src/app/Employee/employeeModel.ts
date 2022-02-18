export interface Employee {
    id: number;
    FirstName?: string;
    LastName?: string;
    Gender?: string;
    EmployeeAddressId?: number;
}

export interface employeeDto {
    FirstName?: string;
    LastName?: string;
    Gender?: string;
    EmployeeAddressId?: number;
}

export interface EmployeeView {
    id: number;
    FirstName?: string;
    LastName?: string;
    Gender?: string;
    EmployeeAddress?: EmployeeAddress;
}

export interface EmployeeAddress {
    Id: number;
    Country: string;
    County: string;
    Postcode: string;
    Street: string;
}