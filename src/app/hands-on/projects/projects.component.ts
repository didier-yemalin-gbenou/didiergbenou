import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Observable<any>;
  loading: boolean = true;

  constructor(db:AngularFireDatabase){
    this.projects = db.list('projects').valueChanges();
    this.projects.subscribe(()=>{ this.loading = false; })
  }
  
}
