import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences: Observable<any>;
  loading: boolean = true;

  constructor(db:AngularFireDatabase){
    this.experiences = db.list('experiences').valueChanges();
    this.experiences.subscribe(()=>{ this.loading = false; })
  }

}
