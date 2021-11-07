import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/adminservice.service'
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';
import { AddlinkComponent } from './addlink/addlink.component';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  ts: any={};

  constructor(private Admin_Service:AdminserviceService,
    public loginService:SignUpServiceService,
    public router:Router,
    private toastr : ToastrService,
    private dialog : MatDialog) { }

  TempMeeting: any[] = [];

  ngOnInit(): void {
    this.refreshGetMeeting();
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }
  refreshGetMeeting(){
   this.Admin_Service.GetMeetingview().subscribe(((data:any[])=>{
     this.TempMeeting=data;
   }));}

   deleteClick(dataItem: { MeetingId: any;}){
     if(confirm('Are you Sure?')){
       this.Admin_Service.DeleteMeeting(dataItem.MeetingId).subscribe(data=>{
        this.toastr.success('Request cancelled', '', {
          timeOut: 1000,
        });
         this.refreshGetMeeting();
       })
     }
   }
  
   ArrangeaddClick(dataItem:any) {
    let dialogREf = this.dialog.open(AddlinkComponent);
    dialogREf.afterClosed().subscribe(res => {
      dataItem.Date = this.Admin_Service.Date;
      dataItem.Time = this.Admin_Service.Time;
      dataItem.Link = this.Admin_Service.Link;
      this.Admin_Service.AddMeetingLink(dataItem.GemId,dataItem).subscribe(res => {
        this.toastr.success('Meeting scheduled succesfully', '', {
          timeOut: 1000,
        });
        this.refreshGetMeeting();
      });
    });
  }  
  
   

}
