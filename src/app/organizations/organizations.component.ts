import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent {

  organizations = [
    {
      name: "Drexel Hackathon and Coding Club",
      link: "https://github.com/D-HAC/D-HAC.github.io",
      logo: "assets/images/dhac.png"
    },
    {
      name: "Phi Theta Kappa Honor Society",
      link: "https://www.ptk.org/default.aspx",
      logo: "assets/images/PTK.png"
    },
    {
      name: "Association for Computing Machinery",
      link: "http://www.acm.org/",
      logo: "assets/images/acm.png"
    }
    

    
    
    
  ]

}
