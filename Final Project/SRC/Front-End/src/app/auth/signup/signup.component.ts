import {Component} from "@angular/core";
import {AuthService} from "../../auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {PNotifyService} from "../../pnotify.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent{
  constructor(private authService: AuthService, private router: Router, private pnotify: PNotifyService){}

  submit(f: NgForm){
    return this.authService.signup(f.value.username, f.value.email, f.value.password, f.value.password_confirmation).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/login']);
        this.pnotify.notify.next({type: 'info', PnotifyObject: {
            text: 'Account Created !!',
            delay: 2000
          }})
      },
      (err)=>{
        console.log(err)
        this.pnotify.notify.next({type: 'error', PnotifyObject: {
            text: JSON.stringify(err),
            delay: 2000
          }})
      }
    )
  }
}
