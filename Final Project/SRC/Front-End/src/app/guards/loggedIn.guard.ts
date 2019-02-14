import {CanActivate, Router} from "@angular/router";
import {TokenService} from "../token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class LoggedInGuard implements CanActivate{
  canActivate(){
    const token = this.tokenService.get();
    if(!!token){
      return true
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

  constructor(private tokenService: TokenService, private router: Router){}
}
