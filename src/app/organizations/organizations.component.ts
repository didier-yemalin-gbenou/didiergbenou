import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent {

  organizations: Observable<any>;

  constructor(db: AngularFireDatabase){
    this.organizations = db.list('organizations').valueChanges();
  }


}
