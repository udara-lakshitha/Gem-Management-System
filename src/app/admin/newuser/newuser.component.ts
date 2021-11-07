import { InterpolationConfig } from '@angular/compiler';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AdminserviceService} from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  ts: any={};

  constructor(private Admin_Service:AdminserviceService,private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router) { }

  TempBuyer: any[] = [];
 

  ngOnInit(): void {
    this.refreshGetBuyer();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  refreshGetBuyer(){
    this.Admin_Service.GetBuyerview().subscribe(((data: any[])=>{
      this.TempBuyer=data;
      
    }));}

  deleteClick(dataItem: { UserId: any; }){
    if(confirm('Are you sure?')){
      this.Admin_Service.DeleteRegistration(dataItem.UserId).subscribe(data=>{
        //alert(data.toString());
        this.toastr.success('Buyer table refreshed successfully', '', {
          timeOut: 2000,
        });
        this.refreshGetBuyer();
      });
      
    }
  }

  BuyeraddClick(dataItem: { 
    UserId:any;
    Name:any;
    Address:any;
    Email:any;
    Password:any;

    IdNumber:any;
    State : any;
    ContactNumber:any;}){
      dataItem.State = 'unblock';
        this.Admin_Service.PostBuyer(dataItem).subscribe(data=>{
        //alert(data.toString());
        this.toastr.success('Buyer Added successfully', '', {
          timeOut: 2000,
        });
      });
      this.deleteClick(dataItem);
    }
  }
      

      
  





 
