import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "./core/home/home.component";
import { MainPageComponent } from "./core/main-page/main-page.component";
import { AllStudentsComponent } from "./students/all/all.component";
import { StudentComponent } from "./students/student/student.component";
import { AllCoursesComponent } from "./courses/all/all.component";
import { CourseComponent } from './courses/course/course.component';
import { EditStudentComponent } from "./students/edit/edit.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'students', children: [
    { path: '', component: AllStudentsComponent },
    { path: ':id', component: StudentComponent },
    { path: ':id/edit', component: EditStudentComponent }
  ] },
  { path: 'courses', children:[
    { path: '', component: AllCoursesComponent },
    { path: ':id', component: CourseComponent }
  ] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule{}
