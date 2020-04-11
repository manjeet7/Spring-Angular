import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/http-client.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private http: HttpClientService) {}

  ngOnInit() {
    this.http
      .getEmployees()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.employees = response;
  }
  deleteEmployee(employee: Employee): void {
    this.http.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(u => u !== employee);
    });
  }
}
