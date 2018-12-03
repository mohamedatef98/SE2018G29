import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormsService } from 'src/app/forms.service';
import { FormGroup, FormControl } from '@angular/forms';
import { validatorsMap } from 'src/app/globals';
import { SubmissionsService } from 'src/app/submissions.service';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit{
  id;

  formTemplate = {
    name: '',
    description: '',
    form: []
  };

  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private formsService: FormsService,
              private submissionsService: SubmissionsService,
              private router: Router){}
  ngOnInit(){
    this.form = new FormGroup({});
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.formsService.getForm(this.id).subscribe((res: any)=>{
        this.formTemplate.name = res.name;
        this.formTemplate.description = res.description;
        this.formTemplate.form = JSON.parse(res.form);
        for(let control of this.formTemplate.form){
          let formControl = new FormControl();
          formControl.setValue(control.initial);
          if(control['validations']){
            let validators = [];
            for(let controlValidation in control.validations){
              if(control.validations[controlValidation])
                validators.push(validatorsMap[controlValidation]);
            }
            formControl.setValidators(validators);
          }
          this.form.addControl(control.name, formControl)
        }
      })
    });
  }

  mapArray(obj){
    return Object.keys(obj);
  }

  submit(){
    this.submissionsService.submit(this.id, this.form.value).subscribe((res)=>{
      this.router.navigate(['done'], {relativeTo: this.route})
    })
  }
}
