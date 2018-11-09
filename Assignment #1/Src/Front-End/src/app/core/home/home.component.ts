import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  searchResults;
  subscription: Subscription;

  constructor(private coursesService: CoursesService){
  }

  ngOnInit() {
  }

  search(courseName){
    if(courseName !== ""){
	    if(this.subscription) 
	      this.subscription.unsubscribe();
	    this.subscription = this.coursesService.searchCourse(courseName).subscribe((data)=>{
	      this.searchResults = data;
	    });
    }
    else
    	this.searchResults = undefined;
  }

}
