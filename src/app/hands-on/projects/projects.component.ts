import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Output('isLoaded') isLoaded = new EventEmitter();
  projects: Observable<any>;

  constructor(db: AngularFireDatabase){
    this.projects = db.list('projects').valueChanges();
    this.projects.subscribe(() => { this.isLoaded.emit(); });
  }

}
