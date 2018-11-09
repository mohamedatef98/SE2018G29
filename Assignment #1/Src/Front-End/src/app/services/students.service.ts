import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Student } from "../models/student.model";

import * as GLOBALS from "../globals";


@Injectable({
  providedIn: "root"
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  public studentsChanged = new Subject<any>();

  getStudents() {
    return this.http.get(`${GLOBALS.API}/students`);
  }

  getStudent(index: number) {
    return this.http.get(`${GLOBALS.API}/students/${index}`);
  }

  addStudent(name: string) {
    return this.http.post(`${GLOBALS.API}/students`, {name}).toPromise()
      .then(
        (res) => {
          this.studentsChanged.next();
          return res;
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  deleteStudent(index: number) {
    return this.http.delete(`${GLOBALS.API}/students/${index}`).toPromise()
      .then(
        (res) => {
        this.studentsChanged.next();
        return res;
      }
    )
      .catch(
        err => console.log(err)
      );
  }

  updateStudent(index: number, newStudent) {
    return this.http.put(`${GLOBALS.API}/students/${index}`, newStudent)
      .toPromise()
      .then(res => {
        this.studentsChanged.next();
        return res;
      })
      .catch(err => console.log(err));
  }
}