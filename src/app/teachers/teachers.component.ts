import { Component, OnInit } from '@angular/core';
import { TEACHERS } from '../base-model/mock-heroes';
import { Teacher } from '../base-model/model';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers = TEACHERS
  list = true;
  selectedTeacher?: Teacher;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(id: number) {
    this.list = false;
    let tut = this.teachers[id];
    let selected = new Teacher(
                      tut.id, new Date(tut.created_by), tut.created_on, '7',
                      tut.modified_by, tut.firstName, tut.otherName, tut.lastName,
                      tut.gender, tut.teacher_number);
    this.selectedTeacher = selected;
    
  }

}


