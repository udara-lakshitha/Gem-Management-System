import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gem } from 'src/app/gem';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {
  ts: any={};

  constructor(
    private service : AdminserviceService,
    private toastr: ToastrService,
    public loginService:SignUpServiceService,
    public router:Router
  ) { }

  auctionGems : Gem[]=[]; 

  ngOnInit(): void {
    this.loadAuctionGems();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }
  loadAuctionGems() {
    this.service.getAuctionGems().subscribe(res => {
      console.log(res);
      this.auctionGems = res;
      console.log(this.auctionGems);
    });
  }

  acceptAuctionGem(data: any) {
    let addedDate = moment(data.AddedDate).format('YYYY-MM-DD');
    let exDate = moment(data.ExpiredDate).format('YYYY-MM-DD');
    this.service.putAuctionGem(data.GemId,addedDate,exDate,this.auctionGems).subscribe(res => {
      this.toastr.success('Gem approved successfully', '', {
        timeOut: 2000,
      });
    })
  }

  rejectGem(data:any){
    this.service.DeleteGem(data.GemId).subscribe(res =>{
      this.toastr.success('Gem deleted successfully', '', {
        timeOut: 2000,
      });
      this.loadAuctionGems()
    });
  }

}
