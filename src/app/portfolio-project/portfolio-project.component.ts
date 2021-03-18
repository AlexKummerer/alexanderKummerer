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
      name: 'Ring of Fire',
      discription:
        'This is one of the most famous drinking card games',
      JsDoc: 'http://alexander-kummerer.developerakademie.com/ringoffire/documentation/overview.html',
      link:
        'https://ring-of-fire-8de7f.web.app',
      img: 'assets/img/ringoffire.png',
    },


    {
      name: 'El Pollo Loco',
      discription:
        'This is a Mexican Jump and Run Game.  You have to jump over chickens and collect Tabasco. In the final level, you have to defeat the Pollo Loco.',
      JsDoc: 'http://alexander-kummerer.developerakademie.com/el_pollo_loco/js/out/index.html',
      link:
        'http://alexander-kummerer.developerakademie.com/el_pollo_loco/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },
    {
      name: 'Join',
      discription:
        'This is a task manager app. After you have created the task, it will be assigned to a Eishower Matrix.',
      JsDoc: 'http://gruppe-51b.developerakademie.com/js/out/index.html',
      link:
        'http://gruppe-51b.developerakademie.com/index.html',
      img: 'assets/img/join.png',
    },
    {
      name: 'Alex bringts...',
      discription:
        'This app makes easy online food ordering possible.',
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
