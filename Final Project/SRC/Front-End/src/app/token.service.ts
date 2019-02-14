import {Injectable} from '@angular/core';
import {api, host} from "./globals";


@Injectable({
  providedIn: 'root'
})
export class TokenService{
  constructor(){}

  issueToken(){
    const token = this.get();
    if(token)
      return "?token=" + token;
    throw "No Token !!!";
  }

  handle(token: string){
    if(this.isValid(token))
      this.set(token)
  }

  set(token: string){
    console.log('Token Added', token);
    localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(token){
    let payload: string = atob(token.split('.')[1]);

    console.log(payload)

    payload = JSON.parse(payload);

    console.log(payload)

    if(<string>((<any>payload).iss).includes(host))
      return true;
    return false;
  }

  addTokenToUri(){
    if(this.get())
      return "?token=" + this.get();
    return false;
  }
}
