import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../Models/profile';


const Graph_EndPoint="https://graph.microsoft.com/v1.0/me"

@Injectable({
  providedIn: 'root'
})

export class UserService {

 
  constructor(private httpClient:HttpClient) { }

  getUserProfile(){
    return this.httpClient.get<Profile>(Graph_EndPoint);
  }
}
