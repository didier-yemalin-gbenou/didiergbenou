import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  content: Observable<any>;

  constructor(db: AngularFireDatabase) { 
    this.content = db.object('about').valueChanges();
  }

  ngOnInit() {
  }

}
