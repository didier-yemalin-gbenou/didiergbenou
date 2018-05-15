import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Output('isLoaded') isLoaded = new EventEmitter();
  skills: Observable<any>;

  constructor(db: AngularFireDatabase) { 
    this.skills = db.list('skills').valueChanges();
    this.skills.subscribe(()=>{ this.isLoaded.emit() })
  }

  ngOnInit() {
  }

}
