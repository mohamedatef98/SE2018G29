import {Component} from "@angular/core";
import {AuthService} from "../../auth.service";
import {NgForm} from "@angular/forms";
import {TokenService} from "../../token.service";
import {Router} from "@angular/router";
import {PNotifyService} from "../../pnotify.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router, private pnotify: PNotifyService){}

  submit(f: NgForm){
    return this.authService.login(f.value.email, f.value.password).subscribe(
      (res)=>{
        if((<any>res).success){
          this.tokenService.handle((<any>res).token);
          this.router.navigate(['/home']);
          this.authService.logEvent.next(true)
          this.pnotify.notify.next({type: 'success', PnotifyObject: {
              text: 'Welcome !!',
              delay: 2000
            }})
        }

      },
      (err)=>{
        console.log(err)
        this.pnotify.notify.next({type: 'error', PnotifyObject: {
            text: JSON.stringify(err.error.message),
            delay: 2000
          }})
      }
    )
  }
}
