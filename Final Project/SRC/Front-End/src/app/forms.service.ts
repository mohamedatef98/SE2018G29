import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {api, headers}  from './globals';
import {TokenService} from "./token.service";


@Injectable({
    providedIn: 'root'
})
export class FormsService{
    constructor(private http: HttpClient, private tokenService: TokenService){
    }

    getForms(){
      const token = this.tokenService.issueToken();
      return this.http.get(`${api}/forms`+ token, {headers: headers});
    }

    getForm(id){
      return this.http.get(`${api}/forms/${id}`, {headers: headers});
    }

    saveForm(form){
      const token = this.tokenService.issueToken();
      return this.http.post(`${api}/forms` + token, form, {headers: headers});
    }

    updateForm(form, id){
      const token = this.tokenService.issueToken();
      return this.http.put(`${api}/forms/${id}`+token, form, {headers: headers});
    }

    deleteForm(id){
      const token = this.tokenService.issueToken();
      return this.http.delete(`${api}/forms/${id}`+token, {headers: headers});
    }
}
