import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bid } from 'src/app/bid';
import { Gem } from 'src/app/gem';
import { SharedService } from 'src/app/service/shared.service';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';
import { SignupComponent } from 'src/app/signup/signup.component';

@Component({
  selector: 'app-showbid',
  templateUrl: './showbid.component.html',
  styleUrls: ['./showbid.component.scss']
})
export class ShowbidComponent implements OnInit {

  constructor(private service : SharedService, private toastr : ToastrService,public loginService:SignUpServiceService,public router:Router,public dialog:MatDialog) { }

  bid : Bid[]=[];
  maxBid : Bid[]=[]
  approvedGems : Gem[]=[]
  enableGemID : any;
  enableButton : boolean = true;
  ts: any={};

  ngOnInit(): void {
    
    this.gedBids();
    
    //this.getApproved();
    
  }

  gedBids(){
      let email = localStorage.getItem('email')
      this.service.showBids(email).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.bid = arryFormData;
    });
    this.enableMeetings();
  }

  enableMeetings(){
    let email = localStorage.getItem('email')
    this.service.enableMeetings(email).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.maxBid = arryFormData;
      this.enableGemID = this.maxBid[0].GemId;
    });
  }

  requestMeeting (data:any) {
    let email = localStorage.getItem('email');
    this.service.requestMeeting(data.GemId,email).subscribe(res => {
      this.toastr.success('Request sent successfully...', '', {
        timeOut: 1000,
      });
    });
  }
  onOpen(){
    const dialogRef = this.dialog.open(SignupComponent, {
      height: '675px',
      width: '400px',
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

  // getApproved(){
  //   this.service.getApprovedGem().subscribe(res => {
  //     var arryFormData = Array.prototype.slice.call(res)
  //     this.approvedGems = arryFormData;
  //   });
  // }

  getImage(): string {
    
    //const id = Number(photo);

    const imgSrc = "data:image/jpeg;base64," + this.service.getPhoto(1);

    return imgSrc;
  }

}
