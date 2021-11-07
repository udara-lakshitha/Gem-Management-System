import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Gem } from 'src/app/gem';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { SharedService } from 'src/app/service/shared.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-show-all-gems',
  templateUrl: './show-all-gems.component.html',
  styleUrls: ['./show-all-gems.component.css']
})
export class ShowAllGemsComponent implements OnInit {



  constructor(private service:SharedService, private toastr : ToastrService, private adminService : AdminserviceService) { }

  GemList:  Gem[] = [];
  bitPressed : boolean=false;
  id :any;
  amount:any;

  ngOnInit(): void {
    this.refreshGemList();
  }

  refreshGemList() {
    if(this.service.pending){
      this.GemList = this.service.approvedGems
    }
    else{
      this.service.getApprovedGem().subscribe(res => {
        var arryFormData = Array.prototype.slice.call(res)
        this.GemList = arryFormData;
        this.service.approvedGems = this.GemList
        console.log(this.getImage)
      });
    }
    
  }

  getImage(): string {
    
    //const id = Number(photo);

    const imgSrc = "data:image/jpeg;base64," + this.service.getPhoto(1);

    return imgSrc;
  }

  bitpressed(data:any){
    this.id = data.GemId;
    this.bitPressed = true;
  }


  addToCart(){  
    let email = localStorage.getItem('email');  
    let role = localStorage.getItem('role'); 
    this.service.addBit(this.id,email,role,this.amount).subscribe(res => {
      this.toastr.success('Bid added successfully', '', {
        timeOut: 1000,
      });
      this.refreshGemList();
    });
    this.bitPressed = false;
  }
  getAmount(event:any){
    this.amount = event.target.value;
  }
 
}
