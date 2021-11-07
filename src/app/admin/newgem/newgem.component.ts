import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gem } from 'src/app/gem';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';

@Component({
  selector: 'app-newgem',
  templateUrl: './newgem.component.html',
  styleUrls: ['./newgem.component.scss']
})
export class NewgemComponent implements OnInit {
  ts: any={};
  

  constructor(private service:AdminserviceService,private toastr: ToastrService,public loginService:SignUpServiceService,public router:Router) { }
  
  // TempGem: any[] | undefined;
  temparyGems : Gem[]=[];

  ngOnInit(): void {
    this.getGems();
        
    // this.refreshTempGem;
  }

  getGems(){
    this.service.getTempGem().subscribe(res => {
      // if(res[0].State == 'pending')
      //   this.temparyGems = res[0];
      for (let index = 0; index < res.length; index++) {
        this.temparyGems[index] = res[index];
        
      }
      this.temparyGems.forEach(element => {
        this.service.pendingGems = element
      });
      //console.log(this.service.pendingGems)
    
    // if(res[0].State == 'pending')
    //   this.temparyGems = res[0];
    });
  }

  acceptGem(data: any){
    // let id : number;
    // id = this.service.pendingGems.GemID;
    this.service.PutGem(data.GemId,this.service.pendingGems).subscribe(res =>{
      this.toastr.success('Gem approved successfully', '', {
        timeOut: 2000,
      });
    });
  }

  rejectGem(data:any){
    this.service.DeleteGem(data.GemId).subscribe(res =>{
      this.toastr.success('Gem deleted successfully', '', {
        timeOut: 2000,
      });
    });
  }

  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }
    
  // refreshTempGem(){
  //     this.service.getTempGem().subscribe(data=>{
  //       this.TempGem=data;
  //     }
  //     )
  // }

}
