import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllCoursesComponent implements OnInit {
  courses;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();

    this.coursesService.coursesChanged.subscribe(() => {
      this.getCourses();
    });
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  deleteCourse(index: number) {
    this.coursesService.deleteCourse(index);
  }

  onSubmit(f: NgForm){
    let {name, max_grade} = f.value;
    this.coursesService.addCourse(name, max_grade).then(()=>{
      f.resetForm();
    });
  }
}
