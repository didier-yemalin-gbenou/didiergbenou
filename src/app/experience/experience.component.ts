import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      title:"Business Analyst",
      location:"PJM Interconnection",
      duration:"September 2017-Present",
      tasks:[
        "Requirements Gathering",
        "Participate in Use Case Requirements Documentation sessions and work with Senior Analysts to write Use Case Documentation",
        "Develop Business Analyst Skills in assessing user needs and working on Design Implementation Approaches",
        "Application Testing - Security Management (Users, Roles, Privileges) Testing",
        "Developing application and data Process Flow Documentation and converting into Vision Flow Charts"
      ]
    },
    {
      title:"Computer Technician",
      location:"Willingboro Public Library",
      duration:"July 2015-Present",
      tasks:[
        "Provide support for the Integrated Library System",
        "Provide customer-focused, quality service",
        "Troubleshoot information technology issues remotely including software, hardware, and networking",
        "Provide desk-side support for devices including desktops, laptops, printers, scanners, copiers, and mobile devices",
        "Perform PC maintenance, upgrades, installs and configurations"
      ]
    },
    {
      title:"Audio Visual Technician",
      location:"Rowan College at Burlington County",
      duration:"March 2015-August 2016",
      tasks:[
        "Deliver, retrieve, set-up, operate, and maintain audio visual equipment for use by faculty and staff",
        "Troubleshoot equipment and classroom issues",
        "Instruct Faculty/Staff on operation of AV equipment",
        "Maintain AV scheduling database",
        "Video Conference technician"
      ]
    }
    
  ];

  

}
