import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {render} from 'creditcardpayments/creditCardPayments';
import { SignUpServiceService } from '../service/sign-up-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public loginService:SignUpServiceService,public router:Router) {
   
  }

  ngOnInit() {
    render(
      {
        id: "#myPaypalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successful");
        }
      }
    );
  }
  // logOut(){
  //   var y = "deactivate";
  //   this.loginService.logout(y);
  //   this.router.navigateByUrl('fly')
  // }

}
