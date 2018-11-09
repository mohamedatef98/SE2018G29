import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Subscription } from 'rxjs';
import { Student } from '../../models/student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllStudentsComponent implements OnInit, OnDestroy {
  editMode: boolean = false;

  subscription: Subscription;

  students;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.getStudents();

    this.subscription = this.studentsService.studentsChanged.subscribe(() => {
      this.getStudents();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getStudents() {
    this.studentsService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(index: number) {
    this.studentsService.deleteStudent(index);
  }

  onSubmit(f: NgForm){
    this.studentsService.addStudent(f.value.name)
      .then((w)=>{
        this.editMode = !this.editMode;
      });
  }
}