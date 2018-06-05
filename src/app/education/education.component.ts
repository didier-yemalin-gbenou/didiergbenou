import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations: Observable<any>;
  loading = true;

  constructor(db: AngularFireDatabase){
    this.educations = db.list('schools').valueChanges();
    this.educations.subscribe(() => { this.loading = false; });
  }


}
