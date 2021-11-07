import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gem } from '../gem';




@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  readonly APIUrl='http://localhost:49911/api';
  adminservice: any;
  
  
  constructor(private http:HttpClient) { }

  pendingGems = new Gem;
  approvedGems = new Gem;
  Date : any;
  Time : any;
  Link : any;

  getTempGem():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Gems')
  }

  getFixedGems():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Gems/fixed')
  }

  getAuctionGems():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Gems/auction')
  }

  PostGem(val:any){
    return this.http.post(this.APIUrl+'/Gems/',val)
  }

  PutGem(id:any,val:any){
    return this.http.put<any>(this.APIUrl+'/Gems/updategem/'+id,val)
  }

  DeleteGem(id:any){
    return this.http.delete(this.APIUrl+'/Gems/'+id)
  }

  GetSellerview():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Sellerview')
  }

  GetBuyerview():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Buyerview')
  }

  GetMeetingview():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Meetings')
  }
  AddMeetingLink(id:any,meeting:any){
    return this.http.put<any>(this.APIUrl+'/Meetings/addmeeting/'+id,meeting);
  }
  DeleteMeeting(val:any){
    return this.http.delete(this.APIUrl+'/Meetings/'+val)
  }

  GetRegistrations(val:any){
    return this.http.get(this.APIUrl+'/Registrations/'+val)
  }

  PostSeller(val:any){
    return this.http.post(this.APIUrl+'/Sellers',val)
  }

  PostBuyer(val:any){
    return this.http.post(this.APIUrl+'/Buyers',val)
  }

  putAuctionGem(id:any,addedDate:any,exDate:any,val:any) {
    return this.http.put<any>(this.APIUrl+'/Gems/updateauctiongem/'+id+'/'+addedDate+'/'+exDate,val);
  }

  DeleteRegistration(val:any){
    return this.http.delete(this.APIUrl+'/Registrations/'+val)
  }

  GetExpiredGems(){
    return this.http.get(this.APIUrl+'/Gems/expired');
  }

  ChangeStatusOfGem(id:any,val:any){
    return this.http.put<any>(this.APIUrl+'/Gems/updategemstate/'+id,val)
  }

  GetLowRateBuyers(){
    return this.http.get(this.APIUrl+'/Buyers/lowratebuyers');
  }

  GetLowRateSellers(){
    return this.http.get(this.APIUrl+'/Sellers/lowratesellers');
  }
  blockSeller(id:any){
    return this.http.put<any>(this.APIUrl+'/Sellers/blockseller/'+id,'')
  }
  blockBuyer(id:any){
    return this.http.put<any>(this.APIUrl+'/Buyers/blockbuyer/'+id,'')
  }
}
