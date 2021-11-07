import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountdetailsComponent } from '../accountdetails/accountdetails.component';
import { SignUpServiceService } from '../service/sign-up-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'login';
  ts: any={};
  data :any;
   
  constructor(public loginService:SignUpServiceService,public router:Router,private dialog : MatDialog){
   
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  accDetails() {
    let dialogREf = this.dialog.open(AccountdetailsComponent);
    dialogREf.afterClosed().subscribe(res => {
      this.data = res;
    });
  }

  ngOnInit(): void {
  }

}
