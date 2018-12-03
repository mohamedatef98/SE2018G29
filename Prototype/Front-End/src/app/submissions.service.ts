import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {api}  from './globals';


@Injectable({
    providedIn: 'root'
})
export class SubmissionsService{
    constructor(private http: HttpClient){
    }

    submit(formId: number, submission){
        return this.http.post(`${api}/submissions/${formId}`, submission);
    }
}