import { FormGroup } from '@angular/forms';
import { FormViewControl } from './form-view-control.interface';
import { Component, Output, EventEmitter, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { availableControls, getComponent } from '../../globals';
import { FormRealControl } from './form-real-control.interface';
@Component({
  selector: 'app-dynamic-control-view',
  template: `
  <div #c></div>
  `,
  styles: [``]
})
export class DynamicControlViewComponent implements OnInit {

  @Output() deleted = new EventEmitter<number>();

  @Input() control;

  @Input() id;

  @Input() form: FormGroup;

  @Input() mode = 'view';

  availableControls = availableControls;

  @ViewChild('c', { read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolve: ComponentFactoryResolver){}

  ngOnInit(){

    const component = getComponent(this.control.value.control);

    const factory = this.resolve.resolveComponentFactory(<any>component);

    const ref = this.container.createComponent(factory);

    (<FormViewControl>ref.instance).ref = (ref);

    (<FormViewControl>ref.instance).id = (this.id);

    (<FormViewControl>ref.instance).group = (this.control);

    (<FormViewControl>ref.instance).form = this.form;

    (<FormViewControl>ref.instance).onDelete.subscribe((obj)=>{
      this.deleted.emit(obj.id);
    });
  }


}




@Component({
  selector: 'app-dynamic-control-real',
  template: `
  <div #c></div>
  `,
  styles: [`div {
    margin: 1rem 0;
  }`]
})
export class DynamicControlRealComponent implements OnInit {

  @Input() control;

  @Input() form: FormGroup;

  @Input() template;

  availableControls = availableControls;

  @ViewChild('c', { read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolve: ComponentFactoryResolver){}

  ngOnInit(){

    const component = getComponent(this.template.control, 'real');

    const factory = this.resolve.resolveComponentFactory(<any>component);

    const ref = this.container.createComponent(factory);

    (<FormRealControl>ref.instance).control = (this.control);

    (<FormRealControl>ref.instance).template = (this.template);

    (<FormRealControl>ref.instance).form = this.form;

  }


}
