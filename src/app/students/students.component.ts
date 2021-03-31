import { Component, OnInit } from '@angular/core';
import { Student } from '../base-model/model';
import { STUDENTS } from '../base-model/mock-heroes';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  list = true;
  detail = false;
  selectedStudent?: Student;
  

  constructor() {
    
   }

  ngOnInit(): void {
  }

  showDetail(id: number) {
    this.list = false;
    this.detail = true;
    let sub = this.students[id];
    let selected = new Student(
                      sub.id, new Date(sub.created_by), sub.created_on, '7',
                      sub.modified_by, sub.firstName, sub.otherName, sub.lastName,
                      sub.gender, sub.student_admission_no);
    this.selectedStudent = selected;
    
  }

}
