import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gem } from '../gem';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:49911/api";

  constructor(private http: HttpClient) { }

  approvedGems : Gem[]=[]
  updatedGems : Gem[]=[]
  pending : any;
  maxBid : any;
  
  getApprovedGem(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Gems/approved');
  }

  getGemById(Id: Number): Observable<any>{
    return this.http.get<any>(this.APIUrl + '/Gems/' + Id);
  }

  getPhoto(Id: Number): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/base64/' + Id);
  }
  addBit(id:number,email:any, role:any, value:number){
    return this.http.put<any>(this.APIUrl + '/Gems/bid/' + id+'/'+ email +'/' + role + '/'+value,'');
  }
  showBids(email:any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Gems/showbids/' + email);
  }
  getMaxBid(id:any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Gems/maxbid/' + id);
  }
  enableMeetings(email:any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/Gems/enablemeeting/' + email);
  }
  filterbycategory(category:any){
    return this.http.get<any>(this.APIUrl + '/Gems/filterbycategory/' + category);
  }

  filterbycolor(category:any){
    return this.http.get<any>(this.APIUrl + '/Gems/filterbycolor/' + category);
  }
  filterbyvalue(minprice:any, maxprice:any){
    return this.http.get<any>(this.APIUrl + '/Gems/filterbyvalue/' + minprice + '/' + maxprice);
  }
  filterbyweight(minweight:any, maxweight:any){
    return this.http.get<any>(this.APIUrl + '/Gems/filterbyweight/' + minweight + '/' + maxweight);
  }
  requestMeeting(gemid:any,email:any){
    return this.http.post<any>(this.APIUrl + '/Gems/requestmeeting/' + gemid+'/'+ email,'');
  }
  getAccDetails(email:any,role:any) {
    return this.http.get<any>(this.APIUrl + '/Admins/accountDetails/'+email+'/'+role);
  }
  
}
