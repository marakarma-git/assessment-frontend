import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CmsComponent } from './cms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmployeeModule } from '../cms/employee/employee.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'',
    component:CmsComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        loadChildren: ()=> import('../cms/employee/employee.module').then(module=>module.EmployeeModule)
      },
      {
        path:'user',
        loadChildren: ()=> import('../cms/user/user.module').then(module=>module.UserModule)
      },
    ]
  }
]

@NgModule({
  declarations: [
    CmsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
    SharedModule,
    EmployeeModule,
    UserModule

  ]
})
export class CmsModule { }
