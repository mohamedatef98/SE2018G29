import { Component, ComponentRef, ViewChild, ElementRef, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormViewControl } from '../form-view-control.interface';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormRealControl } from '../form-real-control.interface';

@Component({
  selector: "app-components-textareaview",
  template: `
    <div class="row box" [formGroup]="form">
      <div class="col-1">
        <app-close (clicked)="delete()"></app-close>
      </div>
      <div class="col-11">
        <div class="row align-items-center">
          <div class="col-6 input">
            <h4>{{ group.controls['name'].value | titlecase }}</h4>
            <mat-form-field>
              <textarea matInput [placeholder]="group.controls['name'].value" [value]="group.controls['initial'].value"></textarea>
            </mat-form-field>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6 offset-3">
              <div class="row">
                  <div class="col-12">
                    <mat-form-field >
                      <input type="text" matInput placeholder="Field Name" [formControl]="group.get('name')"/>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <textarea matInput placeholder="Initial" [formControl]="group.get('initial')"></textarea>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row" [formGroup]="group.get('validations')">
                  <div class="col-12">
                    <mat-checkbox [formControl]="$any(group.get('validations')).controls['required']">Required</mat-checkbox>
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
      .input > * {
        width: 100%;
      }
  `]
})
export class TextAreaViewComponent implements FormViewControl {

  @Input() id: number;

  @Input() ref: ComponentRef<any>;

  @Input() form: FormGroup;

  @Output() onDelete = new EventEmitter<{id: number, ref: ComponentRef<any>}>();

  @Input() group: FormGroup ;


  ngOnInit(): void {
    //this.group = <FormGroup>(<FormArray>this.form.controls['form']).controls[this.id];
  }

  static getGroup(){
    return new FormGroup({
      'name': new FormControl('TextArea Name', [Validators.required]),
      'control': new FormControl('textarea'),
      'initial': new FormControl(''),
      'validations': new FormGroup({
        'required': new FormControl(false)
      })
    })
  }

  delete(){
    this.onDelete.emit({'id': this.id, 'ref': this.ref});
  }

}


@Component({
  selector: 'app-components-textarea',
  template: `
  <div class="row" [formGroup]="form">
      <div class="col-8 offset-2 input">
       <mat-form-field>
          <textarea matInput [placeholder]="template.name" [formControl]="control">
          </textarea>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [``]
})
export class TextAreaComponent implements FormRealControl, OnInit{
  @Input() form: FormGroup;

  @Input() control: FormControl;

  @Input() template;

  ngOnInit(){

  }
}
