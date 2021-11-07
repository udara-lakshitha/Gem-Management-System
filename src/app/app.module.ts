import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { from } from 'rxjs';
import {  MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { NewuserComponent } from './admin/newuser/newuser.component';
import { NewgemComponent } from './admin/newgem/newgem.component';
import { ExpiredgemComponent } from './admin/expiredgem/expiredgem.component';
import { MeetingComponent } from './admin/meeting/meeting.component';
import { LowrateuserComponent } from './admin/lowrateuser/lowrateuser.component';
import { AdminserviceService} from './service/adminservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SellerComponent } from './seller/seller.component';
import { AddgemComponent } from './seller/addgem/addgem.component';
import { ConfirmedmeetingsComponent } from './seller/confirmedmeetings/confirmedmeetings.component';
import { NewsellerComponent } from './admin/newseller/newseller.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { ShowAllGemsComponent } from './home/show-all-gems/show-all-gems.component';
import { ShowGemByIdComponent } from './home/show-gem-by-id/show-gem-by-id.component';
import { SharedService } from './service/shared.service';
import { ShowbidComponent } from './home/showbid/showbid.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from '../app/login/login.component';
import {MatTabsModule} from '@angular/material/tabs'
import { JwtHelperService, JwtInterceptor, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { FlyComponent } from './fly/fly.component';
import { FixedComponent } from './admin/newgem/fixed/fixed.component';
import { AuctionComponent } from './admin/newgem/auction/auction.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InputbidComponent } from './home/inputbid/inputbid.component';
import { AddlinkComponent } from './admin/meeting/addlink/addlink.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NewuserComponent,
    NewgemComponent,
    ExpiredgemComponent,
    MeetingComponent,
    LowrateuserComponent,
    SellerComponent,
    AddgemComponent,
    ConfirmedmeetingsComponent,
    NewsellerComponent,
    HomeComponent,
    ShowAllGemsComponent,
    ShowGemByIdComponent,
    ShowbidComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    FlyComponent,
    FixedComponent,
    AuctionComponent,
    InputbidComponent,
    AddlinkComponent,
    AccountdetailsComponent,
    NavbarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    RouterModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  entryComponents:[LoginComponent,RegistrationComponent],

  providers: [AdminserviceService,
              SharedService,
              JwtHelperService,
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
   
             ],
                     
  bootstrap: [AppComponent]
})
export class AppModule { }
function JWT_Module_Options(JWT_Module_Options: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

