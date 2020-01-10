import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const BASE_URL = "https://insta.nextacademy.com/api/v1"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${BASE_URL}/users/`)
  }

  getUserImages(userId){
    return this.http.get(`${BASE_URL}/images/?userId=${userId}`)
  }

  signUp(username, email, password){
    const params = {
      username: username,
      email: email,
      password: password,
    }
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    return this.http.post(`${BASE_URL}/users/`, params, httpOptions )
  }

  login(username, password){
    const params = {
      username: username,
      password: password,
    }
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }

    return this.http.post(`${BASE_URL}/login`, params, httpOptions)
  }

  getMyImages(){
    let authToken = localStorage.get("authToken")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }),
    }

    return this.http.get(`${BASE_URL}/images/me`, httpOptions)
  }
}
