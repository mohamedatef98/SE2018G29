import { Component, ComponentRef, ViewChild, ElementRef, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormViewControl } from '../form-view-control.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormRealControl } from '../form-real-control.interface';


@Component({
  selector: "app-components-inputview",
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
              <input [type]="group.controls['type'].value" matInput [placeholder]="group.controls['name'].value" [value]="group.controls['initial'].value"/>
            </mat-form-field>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6">
              <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <input #c type="text" matInput placeholder="Field Name" [formControl]="group.get('name')"/>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <mat-form-field>
                      <input [type]="group.controls['type'].value" matInput placeholder="Initial" [formControl]="group.get('initial')" />
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
                <mat-radio-group [formControl]="group.get('type')">
                  <div class="row" *ngFor="let type of types">
                    <div class="col-12">
                      <mat-radio-button [value]="type">
                        {{type | titlecase}}
                      </mat-radio-button>
                    </div>
                  </div>
                </mat-radio-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class InputViewComponent implements FormViewControl, OnInit {

  @Input() id: number;

  @Input() ref: ComponentRef<any>;

  @Output() onDelete = new EventEmitter<{id: number, ref: ComponentRef<any>}>();

  @Input() form: FormGroup;

  @Input() group: FormGroup;

  ngOnInit(){
    //this.group = <FormGroup>(<FormArray>this.form.controls['form']).controls[this.id];
  }

  static getGroup(){
    return new FormGroup({
      'name': new FormControl('Input Name', [Validators.required]),
      'control': new FormControl('input'),
      'type': new FormControl('text', [Validators.required]),
      'initial': new FormControl(''),
      'validations': new FormGroup({
        'required': new FormControl(false)
      })
    });
  }

  @ViewChild('c') c: ElementRef;


  delete(){
    this.onDelete.emit({'id': this.id, ref: this.ref});
  }

  types = [
    'text', 'email', 'password', 'number', 'date'
  ]

}


@Component({
  selector: 'app-components-input',
  template: `
  <div class="row" [formGroup]="form">
      <div class="col-8 offset-2 input">
        <mat-form-field>
          <input type="{{ template.type }}" matInput placeholder="{{ template.name }}" [formControl]="control"/>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [``],
})
export class InputComponent implements FormRealControl, OnInit{

  @Input() form: FormGroup;

  @Input() template;
  
  @Input() control: FormControl;

  ngOnInit(){

  }
}
