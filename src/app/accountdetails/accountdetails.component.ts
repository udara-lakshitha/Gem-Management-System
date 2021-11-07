import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {
  user : any[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private service:SharedService) { }

  ngOnInit(): void {
    let email = localStorage.getItem('email');
    let role = localStorage.getItem('role');
    console.log(role)
    this.service.getAccDetails(email,role).subscribe(res =>{
      this.user = res;
      console.log(this.user);
    });
  }

}
