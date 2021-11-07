import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpiredgemComponent } from '../admin/expiredgem/expiredgem.component';
import { LowrateuserComponent } from '../admin/lowrateuser/lowrateuser.component';
import { MeetingComponent } from '../admin/meeting/meeting.component';
import { NewgemComponent } from '../admin/newgem/newgem.component';
import { NewuserComponent } from '../admin/newuser/newuser.component';
import { HomeComponent } from '../home/home.component';
import { ShowAllGemsComponent } from '../home/show-all-gems/show-all-gems.component';
import { ShowGemByIdComponent } from '../home/show-gem-by-id/show-gem-by-id.component';
import { ShowbidComponent } from '../home/showbid/showbid.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AddgemComponent } from '../seller/addgem/addgem.component';
import { ConfirmedmeetingsComponent } from '../seller/confirmedmeetings/confirmedmeetings.component';
import { SellerComponent } from '../seller/seller.component';
import { SignUpServiceService } from '../service/sign-up-service.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.scss']
})
export class FlyComponent implements OnInit {
  allOnline: any;
  constructor(public dialog:MatDialog,public loginService : SignUpServiceService) { }

  ngOnInit(){
    this.getOnline();
  }

  onOpenLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '550px',
      width: '400px',
    });
  }
  
  onOpenRegistration(){
    const dialogRef = this.dialog.open(RegistrationComponent, {
      height: '675px',
      width: '400px',
    });
  }
  getOnline (){
    this.loginService.getAllOnline().subscribe(d =>{
      this.allOnline = d;
      console.log(this.allOnline);
    },error =>{
      console.log(error);
    })
    
  }

}

