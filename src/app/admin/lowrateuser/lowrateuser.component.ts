import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Buyer } from 'src/app/buyer';
import { Seller } from 'src/app/seller';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-lowrateuser',
  templateUrl: './lowrateuser.component.html',
  styleUrls: ['./lowrateuser.component.scss']
})
export class LowrateuserComponent implements OnInit {
  ts: any={};

  constructor(private service : AdminserviceService, private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router) { }

  lowratebuyers : Buyer[]=[];
  lowratesellers : Seller[]=[];

  ngOnInit(): void {
    this.getBuyers();
    this.getSellers();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  getBuyers(){
    
    this.service.GetLowRateBuyers().subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.lowratebuyers = arryFormData;
    });
  }

  getSellers(){
    this.service.GetLowRateSellers().subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.lowratesellers = arryFormData;
    });
  }

  blockBuyer(dataItem:any) {
    this.service.blockBuyer(dataItem.BuyerId).subscribe(res => {
      this.toastr.success('Buyer blocked', '', {
        timeOut: 1000,
      });
      this.getBuyers();
    });
  }

  blockSeller(dataItem:any) {
    this.service.blockSeller(dataItem.SellerId).subscribe(res => {
      this.toastr.success('Seller blocked', '', {
        timeOut: 1000,
      });
      this.getSellers();
    });
  }

}
