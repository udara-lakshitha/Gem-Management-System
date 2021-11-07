import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Gem } from '../gem';
import { SharedService } from '../service/shared.service';
import {MatDialog} from '@angular/material/dialog';
import { InputbidComponent } from './inputbid/inputbid.component';
import { SignUpServiceService } from '../service/sign-up-service.service';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  localImg: string = "data:image/jpeg;base64,";
  ts: any={};

  constructor(
    private service:SharedService, 
    private toastr : ToastrService, 
    private sanitizer: DomSanitizer,
    private dialog : MatDialog,
    public loginService:SignUpServiceService,
    public router:Router) { }

  
  Categories = ["Agate", "Alexandrite", "Amethyst", "Aquamarine","Beryl","Blue Saphire","Citrine","Cymophane","Diamond","Emerald","Feldspar","Garnet","Moonstone","Rose Quartz","Ruby","Spinel","Topaz","Tourmaline","Topaz","Zircon"];
  Colors = ["Blue", "Red", "Green", "Yellow","Pink","Purple","White","Orange","Gold","Amber","Multi colour","Colour Change Gems"];
  bitPressed : boolean=false;
  id :any;
  amount:any;
  minprice : any;
  maxprice : any;
  minweight : any;
  maxweight : any;
  maxbid : any;

  gemList : Gem[]=[]
  temparyGems_fixed1 : Gem[]=[];
  temparyGems_auction1 : Gem[]=[];
  temparyGems_fixed : Gem[]=[];
  temparyGems_auction : Gem[]=[];

  ngOnInit(): void {
    this.refreshGemList();
  }

  filterByCategory(item:any){
    this.service.filterbycategory(item).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.service.pending = true;
      this.service.approvedGems = arryFormData
      this.gemList = this.service.approvedGems
      this.separateFixedAuctionGems();
    });
  }

  // getMaxBid (data:any) {
  //   this.service.getMaxBid(data.GemId).subscribe(res => {
  //     this.maxbid = res;
  //   });
  //   return this.maxbid;
  // }

  filterByColor(item:any){
    this.service.filterbycolor(item).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.service.pending = true;
      this.service.approvedGems = arryFormData
      this.gemList = this.service.approvedGems
      this.separateFixedAuctionGems();
    });
  }
  onOpen(){
    const dialogRef = this.dialog.open(SignupComponent, {
      height: '500px',
      width: '400px',
    });
  }

  OnInputMinValue(event:any){
    this.minprice = event.target.value;
  }

  OnInputMaxValue(event:any){
    this.maxprice = event.target.value;
  }

  filterByPrice(){
    this.service.filterbyvalue(this.minprice,this.maxprice).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.service.pending = true;
      this.service.approvedGems = arryFormData
      this.gemList = this.service.approvedGems
      this.separateFixedAuctionGems();
    });
  }

  OnInputMinWeight(event:any){
    this.minweight = event.target.value;
  }

  OnInputMaxWeight(event:any){
    this.maxweight = event.target.value;
  }

  filterByWeight(){
    this.service.filterbyweight(this.minweight,this.maxweight).subscribe(res => {
      var arryFormData = Array.prototype.slice.call(res)
      this.service.pending = true;
      this.service.approvedGems = arryFormData
      this.gemList = this.service.approvedGems;
      this.separateFixedAuctionGems();
    });
  }

  bitpressed(data:any){
    this.id = data.GemId;
    this.bitPressed = true;
    this.service.getMaxBid(this.id).subscribe(max => {
      this.maxbid = max;
      this.service.maxBid = this.maxbid;
    });
    let dialogREf = this.dialog.open(InputbidComponent);
    dialogREf.afterClosed().subscribe(res => {
      this.amount = res;
      this.addToCart();
    });
  }

  // getAmount(event:any){
  //   this.amount = event.target.value;
  // }
  
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
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }
  

  refreshGemList() {
      this.service.getApprovedGem().subscribe((res:any) => {
        var arryFormData = Array.prototype.slice.call(res)
        this.gemList = arryFormData;
        this.service.approvedGems = this.gemList
        let objectURL = 'data:image/png;base64,' + res.Images1;
        this.separateFixedAuctionGems();
      });
      
    
  }
  separateFixedAuctionGems() {
    this.temparyGems_fixed1 = [];
    this.temparyGems_auction1 = [];
    this.temparyGems_fixed = [];
    this.temparyGems_auction = [];
    for (let index = 0; index < this.gemList.length; index++) {
      if(this.gemList[index].Fixed)
        this.temparyGems_fixed1[index] = this.gemList[index];
        if(this.gemList[index].Auction)
        this.temparyGems_auction1[index] = this.gemList[index];
    }
    let count : number = 0;
    for (let index = 0; index < this.temparyGems_fixed1.length; index++) {
      if(this.temparyGems_fixed1[index]!=undefined){
        this.temparyGems_fixed[count] = this.temparyGems_fixed1[index];
        count++;
      }
        
    }
    count = 0;
    for (let index = 0; index < this.temparyGems_auction1.length; index++) {
      if(this.temparyGems_auction1[index]!=undefined){
        this.temparyGems_auction[count] = this.temparyGems_auction1[index];
        count++;
      }
      
    }
    console.log(this.gemList);
    console.log(this.temparyGems_fixed)
    console.log(this.temparyGems_auction)

  }

  // getImage(): string {
    
  //   //const id = Number(photo);

  //   const imgSrc = "data:image/jpeg;base64," + this.service.getPhoto(1);

  //   return imgSrc;
  // }

}
