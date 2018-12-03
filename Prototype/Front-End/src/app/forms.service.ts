import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {api}  from './globals';


@Injectable({
    providedIn: 'root'
})
export class FormsService{
    constructor(private http: HttpClient){
    }

    getForms(){
        return this.http.get(`${api}/forms`);
    }

    getForm(id){
        return this.http.get(`${api}/forms/${id}`);
    }

    saveForm(form){
        return this.http.post(`${api}/forms`, form);
    }

    updateForm(form, id){
      return this.http.put(`${api}/forms/${id}`, form);
    }

    deleteForm(id){
      return this.http.delete(`${api}/forms/${id}`);
    }
}
