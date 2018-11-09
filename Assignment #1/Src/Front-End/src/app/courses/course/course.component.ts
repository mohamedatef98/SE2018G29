import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id: number;
  course;

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getCourse();
    })
  }

  getCourse(){
    this.coursesService.getCourse(this.id).subscribe((data)=>{
      this.course = data;
    })
  }

}
