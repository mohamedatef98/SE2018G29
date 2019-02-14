import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {api, headers} from "./globals";
import {TokenService} from "./token.service";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logEvent = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) { }

  login(email: string, password: string){
    return this.http.post(api + "/login", {email, password}, {headers: headers});
  }

  signup(username: string, email: string, password: string, password_confirmation: string){
    return this.http.post(api + "/signup", {username, email, password, password_confirmation}, {headers: headers});
  }

  logout(){
    this.tokenService.remove();
    this.router.navigate(['/']);
    this.logEvent.next(false);
  }
}
