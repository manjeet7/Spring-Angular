import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private http: HttpClient) {}
  getEmployees() {
    console.log("hello");
    return this.http.get<Employee[]>("http://localhost:8080/employees");
  }
  public deleteEmployee(employee) {
    return this.http.delete<Employee>(
      "http://localhost:8080/employees" + "/" + employee.empId
    );
  }

  public createEmployee(employee) {
    return this.http.post<Employee>(
      "http://localhost:8080/employees",
      employee
    );
  }
}
