import { CheckBoxViewComponent, CheckBoxComponent } from './form/components/controls/check.component';
import { TextAreaViewComponent, TextAreaComponent } from './form/components/controls/textarea.component';
import { RadioViewComponent, RadioComponent } from './form/components/controls/radio.component';
import { InputViewComponent, InputComponent } from './form/components/controls/input.component';
import { Validators } from '@angular/forms';


export const api = "./api";

export const   availableControls = [
  { control: 'input', component: {'view': InputViewComponent, 'real': InputComponent } },
  { control: 'radio', component: {'view': RadioViewComponent, 'real': RadioComponent } },
  { control: 'textarea', component: {'view': TextAreaViewComponent, 'real': TextAreaComponent } },
  { control: 'checkbox', component: {'view': CheckBoxViewComponent, 'real': CheckBoxComponent } }
];

export const validatorsMap = {
  'required': Validators.required,
  'email': Validators.email
}

export function getComponent(control, mode: 'real' | 'view' = 'view'){
  return availableControls.find((availableControl)=>{
    return availableControl.control === control;
  }).component[mode];
}
