import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SubmissionsService} from "../../../../submissions.service";

@Component({
  selector: 'app-one-submission',
  templateUrl: 'one-submission.component.html',
  styleUrls: ['one-submission.component.css']
})
export class OneSubmissionComponent implements OnInit{

  submission;

  formId: number;

  submissionId: number;

  loading = true;

  constructor(private route: ActivatedRoute, private submissionService: SubmissionsService){}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.formId = +paramMap.get('formId');
      this.submissionId = +paramMap.get('submissionId');
      this.submissionService.getSubmission(this.formId, this.submissionId).subscribe((res)=>{
        this.submission = res;
        this.loading = false;
        this.submission.data = JSON.parse((<any>res).data);
      })
    })
  }

  keys(o){
    return Object.keys((o));
  }

}
