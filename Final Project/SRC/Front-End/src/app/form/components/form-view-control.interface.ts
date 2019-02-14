import { EventEmitter, ComponentRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

export interface FormViewControl{
    id: number;

    ref: ComponentRef<any>;

    form: FormGroup;

    onDelete: EventEmitter<{id: number, ref: ComponentRef<any>}>;

    group: FormGroup;

  }
