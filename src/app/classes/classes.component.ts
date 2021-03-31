import { Component, OnInit } from '@angular/core';
import { CLASSES } from '../base-model/mock-heroes';
import { ClassStream} from '../base-model/model'


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  list = true;
  classes = CLASSES;
  selectedClass?: ClassStream;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(id: number) {
    this.list = false;
    let stream = this.classes[id];
    let selected = new ClassStream(
                      stream.id, new Date(stream.created_by), stream.created_on, '7',
                      stream.modified_by, stream.className, stream.classGrade, stream.description,);
    this.selectedClass = selected;
  }
}

