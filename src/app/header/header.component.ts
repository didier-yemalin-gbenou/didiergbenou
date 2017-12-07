import { bounce, slideIn } from './../animations/animations-header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    bounce,
    slideIn
  ]
})
export class HeaderComponent {

  icons = [
    { 
      name: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/didier-gbenou-08271348',
      tooltip: 'LinkedIn',
      target: '_blank'
    },
    { 
      name: 'fa-github',
      link: 'https://github.com/didier-yemalin-gbenou' ,
      tooltip: 'Github',
      target: '_blank'
    },
    { 
      name: 'fa-bitbucket',
      link: 'https://bitbucket.org/dyg23-drexel/' ,
      tooltip: 'Bitbucket',
      target: '_blank'
    },
    { 
      name: 'fa-stack-overflow',
      link: 'https://stackoverflow.com/users/7098615/dayderluv?tab=profile' ,
      tooltip: 'Stackoverflow',
      target: '_blank'
    },
    { 
      name: 'fa-envelope',
      link: '/contact' ,
      tooltip: 'Contact',
      target: '_self'
    }
  ];

}
