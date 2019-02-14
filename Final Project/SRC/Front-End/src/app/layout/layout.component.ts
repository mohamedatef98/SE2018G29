import {Component, OnInit} from "@angular/core";
import {TokenService} from "../token.service";
import {AuthService} from "../auth.service";
import {PNotifyService} from "../pnotify.service";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  loggedIn = false;

  constructor(private tokenService: TokenService, private authService: AuthService, private pnotify: PNotifyService){}

    ngOnInit(){
      this.loggedIn = !!this.tokenService.get();
      this.authService.logEvent.subscribe((res)=>this.loggedIn = res);
      this.pnotify.notify.subscribe((notification)=>{
        this.pnotify.getPNotify()[notification.type](notification.PnotifyObject);
      })
    }

    logout(e: Event){
      this.authService.logout();
      this.pnotify.notify.next({type: 'info', PnotifyObject:{
        text: 'Bye !',
          delay: 2000
      }})
    }
}
