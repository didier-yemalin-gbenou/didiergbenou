import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      name:"Angular 2+",
      link:"assets/images/angular.png"
    },
    {
      name:"NodeJS",
      link:"assets/images/nodejs.png"
    },
    {
      name:"Javascript",
      link:"assets/images/javascript.png"
    },
    {
      name:"JQuery",
      link:"assets/images/jquery.gif"
    },
    {
      name:"Bootstrap",
      link:"assets/images/bootstrap.png"
    },
    {
      name:"PHP",
      link:"assets/images/php.png"
    },
    {
      name:"Python",
      link:"assets/images/python.png"
    },
    {
      name:"C++",
      link:"assets/images/CplusPlus.png"
    },
    {
      name:"PL/SQL",
      link:"assets/images/plsql.png"
    },
    {
      name:"MySQL",
      link:"assets/images/mysql.png"
    },
    {
      name:"Git",
      link:"assets/images/git.png"
    },
    {
      name:"French",
      link:"assets/images/french.png"
    },

  ];



  constructor() { }

  ngOnInit() {
  }

}
