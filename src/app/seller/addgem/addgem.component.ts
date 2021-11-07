import { Component, OnInit } from '@angular/core';
import { Gem } from 'src/app/gem';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/service/adminservice.service';
import { Observable, Subscriber } from 'rxjs';
import { SignUpServiceService } from 'src/app/service/sign-up-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addgem',
  templateUrl: './addgem.component.html',

  styleUrls: ['./addgem.component.scss']
}
)
export class AddgemComponent implements OnInit {
  ts: any={};

  constructor(
    private toastr: ToastrService, 
    private fb : FormBuilder,
    private adminservice : AdminserviceService,
    public loginService:SignUpServiceService,
    public router:Router
  ) { }

  gemType = ["Agate", "Alexandrite", "Amethyst", "Aquamarine","Beryl","Blue Saphire","Citrine","Cymophane","Diamond","Emerald","Feldspar","Garnet","Moonstone","Rose Quartz","Ruby","Spinel","Topaz","Tourmaline","Topaz","Zircon"];
  color = ["Blue", "Red", "Green", "Yellow","Pink","Purple","White","Orange","Gold","Amber","Multi colour","Colour Change Gems"];
  addGem = this.adminservice.pendingGems;
  form = new FormGroup({
    gemtype: new FormControl('gemtype',Validators.required),
    color: new FormControl('gemtype',Validators.required),
    weight: new FormControl('gemtype',Validators.required),
    basevalue: new FormControl('gemtype',Validators.required),
    shape: new FormControl('gemtype',Validators.required)
  });

  imgurl1 : any;
  imgurl2 : any;
  imgurl3 : any;

  imgFile1 : any = null;
  imgFile2 : any = null;
  imgFile3 : any = null;
  certificateurl : any;
  certificateFile : any = null;


temp : any;
  
  

  ngOnInit(): void {
    
  }
  logOut(){
    this.ts.LogId = localStorage.getItem('Id');
    this.ts.Status = "deactive";
    this.loginService.logout(this.ts).subscribe(data =>{
      console.log(data);
    });
   
    this.router.navigateByUrl('fly')
  }

  convertToBase64(file:File){
    
  }

  readFile(file:File, subscriber:Subscriber<any>){
    
  }

  imageInput1(file:any){
    this.imgFile1 = file.target.files[0];
    var observable = new Observable((subscriber:Subscriber<any>) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(this.imgFile1);
      fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
    });
    observable.subscribe((d) => {
      this.imgurl1 = d;
      this.addGem.Images1 = this.imgurl1;
      console.log(this.addGem.Images1)
    });
  }

  imageInput2(file:any){
    this.imgFile2 = file.target.files[0];
    var observable = new Observable((subscriber:Subscriber<any>) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(this.imgFile2);
      fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
    });
    observable.subscribe((d) => {
      this.imgurl2 = d;
      this.addGem.Images2 = this.imgurl2;
      console.log(this.addGem.Images2)
    });
  }

  imageInput3(file:any){
    this.imgFile3 = file.target.files[0];
    var observable = new Observable((subscriber:Subscriber<any>) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(this.imgFile3);
      fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
    });
    observable.subscribe((d) => {
      this.imgurl3 = d;
      this.addGem.Images3 = this.imgurl3;
      console.log(this.addGem.Images3)
    });
  }

  certificateInput(file:any){
    this.certificateFile = file.target.files[0];
    var observable = new Observable((subscriber:Subscriber<any>) => {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(this.certificateFile);
      fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
    });
    observable.subscribe((d) => {
      this.certificateurl = d;
      this.addGem.GemCertificate = this.certificateurl;
      console.log(this.addGem.GemCertificate)
    });
  }

  showToasterSuccess(){
    if(this.form.valid){
      this.addGem.State='pending'
      this.adminservice.pendingGems = this.addGem;
      this.adminservice.PostGem(this.adminservice.pendingGems).subscribe(res => {
        this.toastr.success('Gem added successfully', '', {
          timeOut: 2000,
        });
        this.form.reset()
      });
      console.log(this.adminservice.pendingGems)
    }
    else
    this.toastr.error('Fill all required fields', '', {
      timeOut: 2000,
    });
  }

  changeToFixed(){
    this.addGem.Fixed = true;
    this.addGem.Auction = false;
  }

  changeToAuction(){
    this.addGem.Auction = true;
    this.addGem.Fixed = false;
    
  }
  

}

