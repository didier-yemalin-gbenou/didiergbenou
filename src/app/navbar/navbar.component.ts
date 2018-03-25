import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    { 
      label: 'About',
      addr: '' 
    },
    { 
      label: 'Experience',
      addr: '/experience'
    },
    { 
      label: 'Education',
      addr: '/education'
    },
    { 
      label: 'Hands-On',
      addr: '/hands-on'
    },
    { 
      label: 'Organizations',
      addr: '/organizations'
    },
    { 
      label: 'Contact',
      addr: '/contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
