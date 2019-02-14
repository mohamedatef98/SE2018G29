import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import {Subject} from "rxjs/internal/Subject";

@Injectable()
export class PNotifyService {

  notify = new Subject<{type: string, PnotifyObject: {}}>();

  getPNotify() {
    PNotifyButtons; // Initiate the module. Important!
    return PNotify;
  }
}
