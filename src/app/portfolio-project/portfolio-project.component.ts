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
        ' This is an Mexican Jump and Run Game. You have to Jump over chicken and collect bottles. At the End of the Game you have to fight against a Pollo Loco.',
      JsDoc: 'http://alexander-kummerer.developerakademie.com/el_pollo_loco/js/out/index.html',
      link:
        'http://alexander-kummerer.developerakademie.com/el_pollo_loco/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },
    {
      name: 'Join',
      discription:
        'This is a Task Manager app. You can create a Task, and it will sort into an "Eisenhower Matrix", due to Urgency and Importance. In the Eisenhower Matrix you can drag and drop your Task',
      JsDoc: 'http://gruppe-51b.developerakademie.com/js/out/index.html',
      link:
        'http://gruppe-51b.developerakademie.com/index.html',
      img: 'assets/img/join.png',
    },
    {
      name: 'Alex bringts...',
      discription:
        'In this project you can order meals. The meals will load from JSON. When you set your order, it will generate a new orderedMeal JSON',
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
