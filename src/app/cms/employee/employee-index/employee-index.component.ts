import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent {

  employees: Employee[] = [];

  constructor(public employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteEmployee(id:number){
    this.employeeService.delete(id).subscribe(res => {
         this.employees = this.employees.filter(item => item.id !== id);
         console.log('Employe deleted successfully!');
    })
  }

}
