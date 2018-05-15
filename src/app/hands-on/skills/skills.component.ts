import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Observable<any>;
  loading: boolean = true;

  constructor(db: AngularFireDatabase) { 
    this.skills = db.list('skills').valueChanges();
    this.skills.subscribe(()=>{ this.loading = false; })
  }

  ngOnInit() {
  }

}
