import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gem } from 'src/app/gem';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.scss']
})
export class FixedComponent implements OnInit {
  ts: any={};

  constructor(private service : AdminserviceService,private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router) { }

  fixedGems : Gem[]=[]

  ngOnInit(): void {
    this.loadFixedGems();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  loadFixedGems() {
    this.service.getFixedGems().subscribe(res => {
      console.log(res);
      this.fixedGems = res;
      console.log(this.fixedGems);
    });
  }

  acceptGem(data: any){
    // let id : number;
    // id = this.service.pendingGems.GemID;
    this.service.PutGem(data.GemId,this.service.pendingGems).subscribe(res =>{
      this.toastr.success('Gem approved successfully', '', {
        timeOut: 2000,
      });
      this.loadFixedGems();
    });
  }

  rejectGem(data:any){
    this.service.DeleteGem(data.GemId).subscribe(res =>{
      this.toastr.success('Gem deleted successfully', '', {
        timeOut: 2000,
      });
      this.loadFixedGems();
    });
  }

}
