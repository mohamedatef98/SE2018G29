import {CanActivate, Router} from "@angular/router";
import {TokenService} from "../token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class NotLoggedInGuard implements CanActivate{
  canActivate(){
    const token = this.tokenService.get();
    if(token){
      this.router.navigate(['/home']);
      return false;
    }

    else
      return true;
  }

  constructor(private tokenService: TokenService, private router: Router){}
}
