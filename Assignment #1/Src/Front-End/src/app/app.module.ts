import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Modules
import { AppRouterModule } from "./app-router.module";


//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



//Services
import { StudentsService } from './services/students.service';
import { CoursesService } from './services/courses.service';


//Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { AllStudentsComponent } from './students/all/all.component';
import { StudentComponent } from './students/student/student.component';
import { AllCoursesComponent } from './courses/all/all.component';
import { CourseComponent } from './courses/course/course.component';
import { EditStudentComponent } from './students/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent,
    AllStudentsComponent,
    StudentComponent,
    EditStudentComponent,
    AllCoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [StudentsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
