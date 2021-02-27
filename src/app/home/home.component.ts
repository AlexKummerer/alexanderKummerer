import { AfterViewInit, Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild (ProjectsComponent)
  private projComp: ProjectsComponent | undefined  ;
  constructor() {}



  ngOnInit(): void {
  }

  
  showPortfolio() {
    console.log('asadsadsadsasd');
    document.getElementById('portfolio').scrollIntoView({
      behavior: 'smooth'
    });  
  } 

}
