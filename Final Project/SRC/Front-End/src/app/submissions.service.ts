import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {api, headers}  from './globals';
import {TokenService} from "./token.service";


@Injectable({
    providedIn: 'root'
})
export class SubmissionsService{
    constructor(private http: HttpClient, private tokenService: TokenService){
    }

    submit(formId: number, submission){
        return this.http.post(`${api}/submissions/${formId}`, submission, {headers: headers});
    }

    getSubmissions(formId: number){
      const token = this.tokenService.issueToken();
      return this.http.get(`${api}/submissions/${formId}`+ token, {headers: headers});
    }

    getSubmission(formId: number, submissionId: number){
      const token = this.tokenService.issueToken();
      return this.http.get(`${api}/submissions/${formId}/${submissionId}`+ token, {headers: headers});
    }
}
