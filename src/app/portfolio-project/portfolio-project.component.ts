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
        ' This is an Mexican Jump and Run Game. You have to Jump over chicken and collect botlles. At the End of the Game you have to fight against a Pollo Loco.',
      JsDoc: '#',
      link:
        'http://alexander-kummerer.developerakademie.com/el_pollo_loco/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },
    {
      name: 'Join',
      discription:
        'This is a Task Manager app. You can create a Task and it will sort into a "Eisenhower Matrix", due to Urgency and Importance. In the Eisenhower MAtrix you can drag and drop your Task',
      JsDoc: '#',
      link:
        'http://gruppe-51b.developerakademie.com/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },
    {
      name: 'Alex bringts...',
      discription:
        'In this project you can order meals. The meals will load from JSON. When you set your order, it will generate a new orderedMeal JSON',
      JsDoc: '#',
      link:
        'http://alexander-kummerer.developerakademie.com/lieferando/index.html',
      img: 'assets/img/el_pollo_loco.png',
    },

  ];


  constructor() {}

  ngOnInit():void {

  }

  
  
 

}
