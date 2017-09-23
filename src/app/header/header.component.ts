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
      link: '',
      tooltip: 'LinkedIn' },
    { name: 'fa-github',
      link: '' ,
      tooltip: 'Github'},
    { name: 'fa-bitbucket',
      link: '' ,
      tooltip: 'Bitbucket'},
    { name: 'fa-stack-overflow',
      link: '' ,
      tooltip: 'Stackoverflow'},
    { name: 'fa-envelope',
      link: '' ,
      tooltip: 'Contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
