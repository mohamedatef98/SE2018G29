import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import {  FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { trigger, transition, style, animate } from "@angular/animations";
import { FormsService } from "../../forms.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import {  availableControls, getComponent } from '../../globals';

@Component({
    selector: 'app-form-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    animations: [
        trigger("fadeIn", [
          transition(":enter", [
            style({ opacity: "0" }),
            animate(".2s ease-out", style({ opacity: "1" }))
          ])
        ]),
        trigger("fadeOut", [
          transition(":leave", [
            style({ opacity: "1" }),
            animate(".2s ease-out", style({ opacity: "0" }))
          ])
        ])
      ]
})
export class FormEditComponent implements OnInit{

    id;

    editMode = false;

    form: FormGroup;

    availableControls =  availableControls;

    ngOnInit(){
      this.form = new FormGroup({
          'name': new FormControl('', [Validators.required]),
          'description': new FormControl(''),
          'form': new FormArray([])
      });

      this.route.paramMap.subscribe((paramMap: ParamMap)=>{
        let id = paramMap.get('id');
        if(id){
          this.editMode = true;
          this.id = +id;
          this.formsService.getForm(id).subscribe((res: any)=>{
            this.form.setValue({'name': res.name, 'description': res.description, 'form': []});
            for(let formGroup of JSON.parse(res.form)){
              let group: FormGroup = (<any>getComponent(formGroup.control)).getGroup();
              group.setValue(formGroup);
              (<FormArray>this.form.get('form')).push(group);
            }
          });
        }
      });
    }


    constructor(private resolve: ComponentFactoryResolver,
                private formsService: FormsService,
                private router: Router,
                private route: ActivatedRoute){}

    pushControl(control){
      let group = (<any>getComponent(control)).getGroup();
      (<FormArray>this.form.controls['form']).push(group);
    }

    add(obj){
      //(<FormArray>this.form.controls['form']).setControl(obj.id, obj.group);
    }

    delete(id){
        (<FormArray>this.form.controls['form']).removeAt(id);
    }

    onSubmit(){
      if(this.id){
        this.formsService.updateForm(this.form.value, this.id).subscribe((res)=>{
          this.redirectBack(res);
        });
      }
      else{
        this.formsService.saveForm(this.form.value).subscribe((res)=>{
          this.redirectBack(res);
        });
      }
    }

    redirectBack(res){
      this.router.navigate(['/'], {relativeTo: this.route});
    }


}
