import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educations = [
    {  
      school: "Drexel University",
      degreeInfo: "Bachelor's Degree, Information Systems, 3.91 GPA",
      duration: "2016-2019",
      moreInfo: "A.J Drexel Scholarship Recipient, Drexel Grant Recipient, Dean's list recipient"
    },
    {  
      school: "Rowan College at Burlington County",
      degreeInfo: "Associate’s Degree, Computer Information Systems, Highest Honors, 4.0 GPA",
      duration: "2014 – 2016",
      moreInfo: "Phi Theta Kappa Honor Society (PTK), Educational Opportunity Fund (EOF), Rowan College at Burlington County Foundation, New Jersey Tuition Assistance Grant Recipient"
    }
  ]
  

}
