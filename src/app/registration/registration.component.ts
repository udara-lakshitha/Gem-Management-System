import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../Models/admin';
import { User } from '../Models/user';
import { SignUpServiceService } from '../service/sign-up-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // public r = /[0-9]+[0-9]+[0-9]+[\#]+[]
  admin!: Admin;
  user!:User;
  hide = true;
  constructor(public fb:FormBuilder,public loginService:SignUpServiceService,public toastr:ToastrService) { }
  UserRegForm = this.fb.group({
    Name: ['', [Validators.required]], 
    Email: ['', [Validators.required,Validators.email]], 
    Password: ['', [Validators.required]], 
    ContactNumber: ['', [Validators.required]], 
    IdNumber: ['', [Validators.required]], 
    Address: ['', [Validators.required]],
    Role: ['', [Validators.required]], 
  });

  AdminRegForm = this.fb.group({    
    CompanyId: ['', [Validators.required]], 
    Name: ['', [Validators.required]], 
    Email: ['', [Validators.required,Validators.email]], 
    Password: ['', [Validators.required]], 
    ContactNumber: ['', [Validators.required]], 
    IdNumber: ['', [Validators.required]], 
    Address: ['', [Validators.required]],      
  }); 
  getErrorMessage() {
    if (this.AdminRegForm.controls.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.AdminRegForm.controls.Email.hasError('email') ? 'Not a valid email' : '';
  } 
  getiErrorMessage() {
    if (this.AdminRegForm.controls.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.AdminRegForm.controls.Email.hasError('email') ? 'Not a valid email' : '';
  } 
  onAdminRegSave(){
    console.log(this.AdminRegForm.value);
    this.admin = Object.assign({CompanyId: this.AdminRegForm.value.CompanyId},
      {Name: this.AdminRegForm.value.Name},
      {Email: this.AdminRegForm.value.Email},
      {Password: this.AdminRegForm.value.Password},
      {ContactNumber: this.AdminRegForm.value.ContactNumber},
      {IdNumber: this.AdminRegForm.value.IdNumber},
      {Address: this.AdminRegForm.value.Address} ) ; 
    this.loginService.CreateAdmin(this.admin).subscribe(i =>    
      {     
        console.log(this.admin); 
        this.toastr.success('Successfully Registered IN', 'Welcome!');
        this.AdminRegForm.reset();    
      });          
  }
  onUserRegSave(){
    
    this.user = Object.assign( {Name: this.UserRegForm.value.Name},
      {Email: this.UserRegForm.value.Email},
      {Password: this.UserRegForm.value.Password},
      {ContactNumber: this.UserRegForm.value.ContactNumber},
      {IdNumber: this.UserRegForm.value.IdNumber},
      {Address: this.UserRegForm.value.Address},
      {Role: this.UserRegForm.value.Role}) ; 
    this.loginService.CreateUser(this.user).subscribe(i =>    
      {     
        console.log(this.user); 
        this.toastr.success('Successfully Registered IN', 'Welcome!');
        this.UserRegForm.reset();    
      });          
  }

  ngOnInit() {
  }

}
