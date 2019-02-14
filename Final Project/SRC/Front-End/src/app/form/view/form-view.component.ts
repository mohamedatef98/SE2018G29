import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormsService} from "../../forms.service";
import {PNotifyService} from "../../pnotify.service";

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit{

  id: number;

  form;

  loading = true;

  constructor(private route: ActivatedRoute, private formService: FormsService, private router: Router, private pnotify: PNotifyService){}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('formId');
      this.formService.getForm(this.id).subscribe((res)=>{
        this.loading = false;
        this.form = res;
      })
    })
  }

  deleteForm(id){
    this.formService.deleteForm(id).subscribe((res)=>{
      this.router.navigate(['/'])
      this.pnotify.notify.next({type: 'info', PnotifyObject: {
          text: "Form Was Deleted Successfully",
          delay: 2000
        }})
    }, err=>{
      this.pnotify.notify.next({type: 'error', PnotifyObject: {
          text: JSON.stringify(err),
          delay: 2000
        }})
    })
  }
}
