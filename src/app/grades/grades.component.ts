import { Component, OnInit } from '@angular/core';
import { Subject } from '../base-model/model';
import { HEROES } from '../base-model/mock-heroes';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  heroes = HEROES;
  list = false;
  detail = false;
  subject = {};
  constructor() { }

  showDetail(id: number) {
    this.list = false;
    this.detail = true;
    let sub = this.heroes[id];
    this.subject = new Subject(
                      sub.id, new Date(sub.created_by), sub.created_on, '7',
                      sub.modified_by, sub.name, sub.description);
  }
}



