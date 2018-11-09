import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  id: number;
  student;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentsService: StudentsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.studentsService.getStudent(this.id).subscribe((student)=>{
        this.student = student;
      });
    });
  }

  deleteStudent(){
    this.studentsService.deleteStudent(this.id).then(()=>{
      this.router.navigate( ['../'], {relativeTo: this.route} );
    })
  }

}
