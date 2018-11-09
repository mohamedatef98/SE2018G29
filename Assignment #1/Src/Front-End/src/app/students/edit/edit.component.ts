import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { trigger, transition, style, animate } from "@angular/animations";


import { StudentsService } from '../../services/students.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate(".2s ease-out", style({ opacity: "1" }))
      ])
    ]),
    trigger("fadeOut", [
      transition(":leave", [
        style({ opacity: "1" }),
        animate(".2s ease-out", style({ opacity: "0" }))
      ])
    ])
  ]
})
export class EditStudentComponent implements OnInit {
  id: number;
  student;
  form: FormGroup;
  courses;

  set: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.initForm();
    this.coursesService.getCourses().subscribe(data => {
      this.courses = data;
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get("id");
      this.studentsService.getStudent(this.id).subscribe(student => {
        this.student = student;
        this.setForm();
      });
    });
  }

  get studentCourses(){
    return (<FormArray>this.form.controls['courses']);
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      courses: new FormArray([
        new FormGroup({
          id: new FormControl(null),
          grade: new FormControl(null)
        })
      ])
    });
  }

  setForm() {
    let courses: FormGroup[] = [];
    for (let course of this.student["courses"]) {
      courses.push(
        new FormGroup({
          id: new FormControl(
            course["id"],
            [Validators.required, this.duplicatesValidation]
          ),
          grade: new FormControl(course["grade"], Validators.required)
        })
      );
    }
    this.form.setControl("id", new FormControl(this.student["id"]));
    this.form.setControl(
      "name",
      new FormControl(this.student["name"], Validators.required)
    );
    this.form.setControl("courses", new FormArray(courses));
    
    this.set = true;
  }

  onSubmit() {
    this.studentsService.updateStudent(this.id, this.form.value).then(()=>{
      this.router.navigate(['../'], { relativeTo: this.route });
  });
  }

  addCourse() {
    (<FormArray>(
      this.form.get("courses")
    )).push(new FormGroup({
        id: new FormControl(null, [
          Validators.required,
          this.duplicatesValidation
        ]),
        grade: new FormControl(null, Validators.required)
      }));
  }

  deleteCourse(index: number) {
    (<FormArray>this.form.get("courses")).removeAt(index);
  }

  duplicatesValidation(control: FormControl) {
    if (control) {
      if (control.parent) {
        let formArray = control.parent.parent;
        let index: number = (<FormGroup[]>(<FormArray>formArray).controls)
                .findIndex((group: FormGroup)=>{
                  return group.controls['id'] == control;
                });
        for (let i = 0; i < (<FormGroup[]>formArray.controls).length; i++ ){
          let group = (<FormGroup[]>formArray.controls)[i];
          if (
            (group.controls.id.value == control.value) &&
            (index != i)
          ) {
            return { 'duplicate': true };
          }
        }
      }
    }
    return null;
  }

}
