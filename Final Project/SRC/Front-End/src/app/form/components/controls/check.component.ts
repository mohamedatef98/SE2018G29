import { Component, ComponentRef, ViewChild, ElementRef, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormViewControl } from '../form-view-control.interface';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormRealControl } from '../form-real-control.interface';

@Component({
  selector: "app-components-radioview",
  template: `
    <div class="row box" [formGroup]="form">
      <div class="col-1">
        <app-close (clicked)="delete()"></app-close>
      </div>
      <div class="col-11">
        <div class="row align-items-center">
          <div class="col-3 input">
            <h4>
              {{ group.controls['name'].value | titlecase }}
            </h4>
            <mat-checkbox [formControl]="group.get('initial')">
              {{ group.controls['name'].value | titlecase }}
            </mat-checkbox>
            <p>
              Initialized to {{ group.controls['initial'].value ? 'True' : 'False' }}
            </p>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-12">
              <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <input type="text" matInput placeholder="Field Name" [formControl]="group.get('name')"/>
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
      mat-radio-button{
          display: block;
      }

      textarea{
          height: 100%
      }
  `],
})
export class CheckBoxViewComponent implements FormViewControl, OnInit{
  @Input() id: number;

  @Input() ref: ComponentRef<any>;

  @Input() form;

  @Output() onDelete = new EventEmitter<{id: number, ref: ComponentRef<any>}>();

  @Input() group: FormGroup;

  ngOnInit(){
    //this.group = <FormGroup>(<FormArray>this.form.controls['form']).controls[this.id];
  }

  static getGroup(){
    return new FormGroup({
      'name': new FormControl('Check Name', [Validators.required]),
      'control': new FormControl('checkbox'),
      'initial': new FormControl(false)
    })
  }

  delete(){
    this.onDelete.emit({'id': this.id, 'ref': this.ref});
  }
}


@Component({
  selector: 'app-components-radio',
  template: `
    <div class="row input" [formGroup]="form">
      <div class="col-8 offset-2">
        <mat-checkbox [formControl]="control">
          {{ template.name | titlecase }}
        </mat-checkbox>
      </div>
    </div>
  `,
  styles: [``],
})
export class CheckBoxComponent implements FormRealControl{
  @Input() form: FormGroup;

  @Input() template;
  
  @Input() control: FormControl;
}
