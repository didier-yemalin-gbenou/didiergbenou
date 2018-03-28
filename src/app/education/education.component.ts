import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Observable<any>;

  constructor(db:AngularFireDatabase){
    this.educations = db.list('schools').valueChanges();
  }
  

}
