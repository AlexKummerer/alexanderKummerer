import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(SlideshowComponent)
  private slideComp: SlideshowComponent | undefined;

  @ViewChild(ProjectsComponent)
  private projects: ProjectsComponent | undefined;

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  
  ngOnInit(): void {
  }

}
