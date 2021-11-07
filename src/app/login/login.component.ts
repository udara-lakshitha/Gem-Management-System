import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import {Logger} from "../Models/logger";
import { SignUpServiceService } from '../service/sign-up-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() routerParams:any;
  // Amodel = {
  //   Email: ['',Validators.required],
  //   Password: ['',Validators.required]
  // }
 Amodel:any={};
  hide = true;
  logger!: Logger;
  
 constructor(private router: Router,public fb:FormBuilder,public loginService:SignUpServiceService,public toastr:ToastrService){this.router=router }
 LoginForm = this.fb.group({
  Email: ['', [Validators.required,Validators.email]], 
  Password: ['', [Validators.required]], 
 })
 
 ngOnInit() {
   
  }

  login(){
   
    this.logger = Object.assign({Email: this.LoginForm.value.Email},
      {Password: this.LoginForm.value.Password});
    this.loginService.Adminlogin(this.logger).subscribe(
      next => {
          console.log(this.logger);
          this.setUserRoles(localStorage.getItem('Token'))

          const curntuser = localStorage.getItem('role');
          
          if(curntuser === 'Admin'){
            this.router.navigateByUrl('admin');
            this.toastr.success('Successfully logged to Admin Layout', 'Welcome!');
          }else if (curntuser === 'Buyer') {
            this.router.navigateByUrl('/home');
            this.toastr.success('Successfully logged to Buyer Layout', 'Welcome!');
          }else if (curntuser === 'Seller'){
          this.router.navigateByUrl('/seller');
          this.toastr.success('Successfully logged to Seller Layout', 'Welcome!');
          this.LoginForm.reset();
          }
          
      },
      err => {
          if (err.status == 400){
            this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          }
          else if (err.status == 404){
            this.toastr.error('You are not a User of the system.', 'Access Denied.');
            console.log(err);
          }
         
      }
    );
  }
  setUserRoles(token:any){
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    localStorage.setItem('role',decodedToken['role']);
  }
 
  loggedin(){
    const Token = localStorage.getItem('Token');
    const userRoles = localStorage.getItem('role');
    return !!Token && userRoles;
  }
  

}
