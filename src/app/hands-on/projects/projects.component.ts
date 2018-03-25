import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: "Roomo",
      problem: `I was working as an AV Technician in my school, 
                and we used to move AV equipment from room to
                room based on instructors' requests. The only
                way to track equipment was to refer to a paper
                sheet that had all the equipment locations, it 
                was full of errors most of the time, so I decided
                to act`,
      solution: `I created a web-based equipment management system
                 that allowed us to track equipment accurately, but
                 also to manage them`,
      link:""
    },
    {
      title: "Doro",
      problem: `Many people in foreign countries do not
                speak English, but they would love to come
                to the US to study. With this language
                barrier, there is a need of a resource
                that they can use in their foreign languages
                to know about all the steps that they have to
                take to achieve their dreams`,
      solution: `I created a web-based app that guides them 
                during the whole process, and help smooth their
                integration in the US`,
      link:""
    }
  ]

  

}
