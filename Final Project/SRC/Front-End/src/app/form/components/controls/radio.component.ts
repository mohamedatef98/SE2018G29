import { Component, ComponentRef, ElementRef, ViewChild, EventEmitter, OnInit, Input, Output } from '@angular/core';
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
            <h4>{{ group.controls['name'].value | titlecase }}</h4>
            <mat-radio-group [value]="group.controls['initial'].value">
              <mat-radio-button *ngFor="let choice of group.controls['options'].value.split('\n')" [value]="choice">
                {{choice | titlecase}}
              </mat-radio-button>
            </mat-radio-group>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-6">
              <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <input type="text" matInput placeholder="Field Name" [formControl]="group.get('name')"/>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <mat-select placeholder="Initial" [formControl]="group.get('initial')">
                        <mat-option
                        *ngFor="let choice of group.controls['options'].value.split('\n')" [value]="choice" >
                            {{choice | titlecase}}
                        </mat-option>
                      </mat-select>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row" [formGroup]="group.get('validations')">
                  <div class="col-12">
                    <mat-checkbox [formControl]="$any(group.get('validations')).controls['required']">Required</mat-checkbox>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <mat-form-field>
                    <textarea matInput placeholder="Enter Choices in lines" [formControl]="group.get('options')"></textarea>
                </mat-form-field>
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

      mat-radio-button{
          display: block;
      }

      textarea{
          height: 100%
      }
  `],
  inputs: ['ref'],
  outputs: ['delete']
})
export class RadioViewComponent implements FormViewControl, OnInit{

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
      'name': new FormControl('Radio Name', [Validators.required]),
      'control': new FormControl('radio'),
      'initial': new FormControl('AnotherDummyChoice', []),
      'options': new FormControl('DummyChoice\nAnotherDummyChoice\nCoolDummyChoice', [Validators.required]),
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
  selector: 'app-components-radio',
  template: `
    <div class="row" [formGroup]="form">
      <div class="col-8 offset-2 input">
        <p>{{ template.name }}</p>
        <mat-radio-group [value]="template.initial">
          <mat-radio-button style="margin: 1rem" *ngFor="let choice of template.options.split('\n')" [value]="choice">
          {{choice | titlecase}}
          </mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  `,
  styles: [``],
})
export class RadioComponent implements FormRealControl, OnInit{
  @Input() form: FormGroup;

  @Input() template;

  @Input() control: FormControl;

  ngOnInit(){}

}
