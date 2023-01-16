import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  imgAvatar = 'assets/img/avatar.gif'

  id!: number;
  employee!: Employee


  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


   ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];

    this.employeeService.find(this.id).subscribe((data: Employee)=>{
      this.employee = data;
    });
  }
}
