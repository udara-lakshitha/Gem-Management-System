import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gem } from 'src/app/gem';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-expiredgem',
  templateUrl: './expiredgem.component.html',
  styleUrls: ['./expiredgem.component.scss']
})
export class ExpiredgemComponent implements OnInit {
  ts: any={};

  constructor(private service : AdminserviceService,private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router) { }

  expiredGems : Gem[]=[];

  ngOnInit(): void {
    this.getExpiredGems();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  getExpiredGems(){
    this.service.GetExpiredGems().subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.expiredGems = arryFormData
    });
  }

  changeState(dataItem:any){
    this.service.ChangeStatusOfGem(dataItem.GemId,this.expiredGems).subscribe(res => {
      this.toastr.success('Gem state changed to expired successfully', '', {
        timeOut: 2000,
      });
    });
  }

}
