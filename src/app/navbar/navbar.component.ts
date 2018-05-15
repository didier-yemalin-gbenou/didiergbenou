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
      label: 'Organizations',
      addr: '/organizations'
    },
    {
      label: 'Hands-On',
      addr: '/hands-on'
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
