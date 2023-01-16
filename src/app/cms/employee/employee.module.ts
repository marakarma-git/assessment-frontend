import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {path:'employee/index', component:EmployeeIndexComponent},
      {path:'employee/create', component:EmployeeCreateComponent},
      {path:'employee/:employeeId/update', component:PaymentRequestUpdateEvent},
      {path:'employee/:employeeId/detail', component:EmployeeDetailComponent},
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeIndexComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EmployeeModule { }
