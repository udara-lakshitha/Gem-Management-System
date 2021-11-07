import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-newseller',
  templateUrl: './newseller.component.html',
  styleUrls: ['./newseller.component.scss']
})
export class NewsellerComponent implements OnInit {
  ts: any={};

  constructor(private Admin_Service:AdminserviceService,private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router ) { }

  TempSeller: any[] = [];
  SaveSeller: any;
  

  ngOnInit(): void {
    this.refreshGetSeller();
  }

  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  refreshGetSeller(){
    this.Admin_Service.GetSellerview().subscribe(((data: any[])=>{
      this.TempSeller=data;
      
    }));}

  deleteClick(dataItem: { UserId: any; }){
    if(confirm('Are you sure?')){
      this.Admin_Service.DeleteRegistration(dataItem.UserId).subscribe(data=>{
        //alert(data.toString());
        this.toastr.success('Seller table refreshed successfully', '', {
          timeOut: 2000,
        });
        this.refreshGetSeller();
      })}}

  selleraddClick(dataItem: { UserId:any;
    Name:any;
    Address:any;
    Email:any;
    Password:any;
    IdNumber:any;
    State : any;
    ContactNumber:any;}){
      dataItem.State = 'unblock';
      this.Admin_Service.PostSeller(dataItem).subscribe(data=>{
      //alert(data.toString());
        this.toastr.success('Seller Added successfully', '', {
          timeOut: 2000,
        });
      });
      this.deleteClick(dataItem);
    }
  }
