import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClearComponent } from './clear/clear.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'user/index', component:UserIndexComponent},
      {path:'user/create', component:UserCreateComponent},
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserIndexComponent,
    UserCreateComponent,
    ClearComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)

  ]
})
export class UserModule { }
