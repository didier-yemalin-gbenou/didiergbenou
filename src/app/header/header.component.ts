import { bounce, slideIn } from './../animations/animations-header';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    bounce,
    slideIn
  ]
})
export class HeaderComponent implements OnInit {

  icons = [
    { name: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/didier-gbenou-08271348',
      tooltip: 'LinkedIn' },
    { name: 'fa-github',
      link: 'https://github.com/didier-yemalin-gbenou' ,
      tooltip: 'Github'},
    { name: 'fa-bitbucket',
      link: 'https://bitbucket.org/dyg23-drexel/' ,
      tooltip: 'Bitbucket'},
    { name: 'fa-stack-overflow',
      link: 'https://stackoverflow.com/users/7098615/dayderluv?tab=profile' ,
      tooltip: 'Stackoverflow'},
    { name: 'fa-envelope',
      link: '' ,
      tooltip: 'Contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
