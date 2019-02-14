import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SubmissionsService} from "../../../submissions.service";

@Component({
  selector: 'app-form-submissions',
  templateUrl: './form-submissions.component.html',
  styleUrls: ['./form-submissions.component.css']
})
export class FormSubmissionsComponent implements OnInit{

  id: number;

  submissions;

  loading = true;

  constructor(private route: ActivatedRoute, private submissionService: SubmissionsService){}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('formId');
      this.submissionService.getSubmissions(this.id).subscribe((res)=>{
        this.loading = false;
        this.submissions = res;
      })
    })
  }
}
