import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import * as GLOBALS from '../globals';

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public coursesChanged = new Subject<any>();

  getCourses() {
    return this.http.get(`${GLOBALS.API}/courses`);
  }

  getCourse(index: number) {
    return this.http.get(`${GLOBALS.API}/courses/${index}`);
  }

  addCourse(name: string, max_grade: number) {
    return this.http
      .post(`${GLOBALS.API}/courses`, {name, max_grade})
      .toPromise()
      .then(res => {
        this.coursesChanged.next();
        return res;
      })
      .catch(err => console.log(err));
  }

  deleteCourse(index: number) {
    return this.http
      .delete(`${GLOBALS.API}/courses/${index}`)
      .toPromise()
      .then(res => {
        this.coursesChanged.next();
        return res;
      })
      .catch(err => console.log(err));
  }

  updateCourse(index: number, newCourse) {
    return this.http
      .post(`${GLOBALS.API}/courses/${index}`, newCourse)
      .toPromise()
      .then(res => {
        this.coursesChanged.next();
        return res;
      })
      .catch(err => console.log(err));
  }

  searchCourse(name){
    return this.http.get(`${GLOBALS.API}/courses/search?q=${decodeURI(name)}`);
  }
}
