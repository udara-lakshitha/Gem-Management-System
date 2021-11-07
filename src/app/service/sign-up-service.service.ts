import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../Models/admin';
import { Logger } from '../Models/logger';
import { User } from '../Models/user';



@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  decodedToken: any;

  constructor(public http:HttpClient) { }

  baseURL= 'http://localhost:49911/api/';
jwtHelper = new JwtHelperService();

  CreateAdmin(admin:Admin):Observable<any>{
    
      return this.http.post(this.baseURL + 'Admins', admin);
  }
  CreateUser(user:User):Observable<any>{
    return this.http.post(this.baseURL + 'Registrations', user);
  }

  Adminlogin(logger:Logger) {
    return this.http.post(this.baseURL + 'Logins/Authenticate', logger )
        .pipe(map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('Token', user.Token);
            localStorage.setItem('Id', user.Id);
            localStorage.setItem('email', user.email);
            localStorage.setItem('userid', user.userid);
            this.decodedToken = this.jwtHelper.decodeToken(user.Token);
          }
        }));
  }
  logout(logId:number){
    localStorage.removeItem('role');
    localStorage.removeItem('Token');
    localStorage.removeItem('email');
    localStorage.removeItem('Id');
    return this.http.put(this.baseURL + 'Logins/logout',logId);
    
  }
  getAllOnline(){
    return this.http.get(this.baseURL +'Logins/onlineSellers');
  }


}
