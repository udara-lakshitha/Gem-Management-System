import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

import { AdminComponent } from './admin/admin.component';
import { ExpiredgemComponent } from './admin/expiredgem/expiredgem.component';
import { LowrateuserComponent } from './admin/lowrateuser/lowrateuser.component';
import { MeetingComponent } from './admin/meeting/meeting.component';
import { AuctionComponent } from './admin/newgem/auction/auction.component';
import { FixedComponent } from './admin/newgem/fixed/fixed.component';
import { NewgemComponent } from './admin/newgem/newgem.component';
import { NewsellerComponent } from './admin/newseller/newseller.component';
import { NewuserComponent } from './admin/newuser/newuser.component';
import { FlyComponent } from './fly/fly.component';
import { HomeComponent } from './home/home.component';
import { ShowAllGemsComponent } from './home/show-all-gems/show-all-gems.component';
import { ShowGemByIdComponent } from './home/show-gem-by-id/show-gem-by-id.component';
import { ShowbidComponent } from './home/showbid/showbid.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddgemComponent } from './seller/addgem/addgem.component';
import { ConfirmedmeetingsComponent } from './seller/confirmedmeetings/confirmedmeetings.component';
import { SellerComponent } from './seller/seller.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:'',redirectTo:'fly',pathMatch:'full'},
  { path: 'newgem', component: NewgemComponent },
  { path: 'expiredgem', component: ExpiredgemComponent },
  { path: 'lowrateuser', component: LowrateuserComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'newseller', component: NewsellerComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'admin', component: AdminComponent},
  { path:'fly',component:FlyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'showallgems', component: ShowAllGemsComponent },
  { path: 'showgembyid', component: ShowGemByIdComponent },
  { path: 'showbid', component: ShowbidComponent },
  { path: 'home', component: HomeComponent},
  { path: 'addgem', component: AddgemComponent },
  { path: 'confirmedmeetings', component: ConfirmedmeetingsComponent },
  { path: 'seller', component: SellerComponent}, 
  { path: 'fixed', component: FixedComponent}, 
  { path: 'auction', component: AuctionComponent},
  { path: 'account', component: AccountdetailsComponent}

//   {path:'fly', loadChildren:'./login'},
 //  {path:'Login',component:LoginComponent},
   //{path:'SignUp',component:SignupComponent},
   //{path:'admin',component:AdminComponent},
   //{path:'newuser',component:NewuserComponent},
   //{path:'newgem',component:NewgemComponent},
   //{path:'meeting',component:MeetingComponent},
   //{path:'lowrateuser',component:LowrateuserComponent},
   //{path:'expiredgem',component:ExpiredgemComponent},
   //{path:'seller',component:SellerComponent},
   //{path:'addgem',component:AddgemComponent},
   //{path:'confirmedmeetings',component:ConfirmedmeetingsComponent},
   //{path:'newseller',component:NewsellerComponent},
   //{path:'home', component:HomeComponent},
   //{path:'showgembyId',component:ShowGemByIdComponent},
   //{path:'showallgem',component:ShowAllGemsComponent},
   //{path:'showAllBids',component: ShowbidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [
  ExpiredgemComponent,
  LowrateuserComponent,
  MeetingComponent,
  NewgemComponent,
  NewuserComponent,
  ShowAllGemsComponent,
  ShowGemByIdComponent,
  ShowbidComponent,
  AddgemComponent,
  ConfirmedmeetingsComponent
]
