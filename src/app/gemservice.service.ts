import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GemserviceService {

  readonly APIUrl='https://localhost:44308/api';

  constructor(private http:HttpClient) { }

  getPengingGems(){
    return this.http.get<any>(this.APIUrl+'/TempGems')
  }
}
