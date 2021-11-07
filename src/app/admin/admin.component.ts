import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpServiceService } from '../service/sign-up-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  ts: any ={};

  constructor(public loginService:SignUpServiceService,public router:Router) { }
  

  ngOnInit(): void {
 
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

}
