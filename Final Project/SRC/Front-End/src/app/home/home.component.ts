import { Component, OnInit } from "@angular/core";
import { FormsService } from "../forms.service";
import { api } from "../globals";
import {PNotifyService} from "../pnotify.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    forms = [];

    api = api;

    constructor(private formsService: FormsService, private pnotify: PNotifyService){}

    ngOnInit(){
      this.getForms();
    }

    delete(id){
      this.formsService.deleteForm(id).subscribe(()=>{
        this.getForms();
      });
    }

    getForms(){
      this.formsService.getForms().subscribe((res: any)=>{
        this.forms = res;
      })
    }
}
