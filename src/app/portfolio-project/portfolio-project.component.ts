import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
})
export class PortfolioProjectComponent implements OnInit {
  projects = [
    {
      name: 'El Pollo Loco',
      discription:
        'This is a Mexican Jump and Run Game.  You have to jump over chickens and collect Tabasco. In the end you have to defeat a Pollo Loco.',
      JsDoc: 'http://alexander-kummerer.developerakademie.com/el_pollo_loco/js/out/index.html',
      link:
        'http://alexander-kummerer.developerakademie.com/el_pollo_loco/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },
    {
      name: 'Join',
      discription:
        'This is a task manager app. After you create the task, it is assigned to an Eisenhower matrix.',
      JsDoc: 'http://gruppe-51b.developerakademie.com/js/out/index.html',
      link:
        'http://gruppe-51b.developerakademie.com/index.html',
      img: 'assets/img/join.png',
    },
    {
      name: 'Alex bringts...',
      discription:
        'In this project you can order food. After you order, a JSON is generated.',
      JsDoc: 'http://alexander-kummerer.developerakademie.com/lieferando/js/out/index.html',
      link:
        'http://alexander-kummerer.developerakademie.com/lieferando/index.html',
      img: 'assets/img/alexbringts.png',
    },

  ];


  constructor() {}

  ngOnInit():void {

  }

  
  
 

}
