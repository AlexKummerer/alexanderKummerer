import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild("portfolio") private parentRef: ElementRef<HTMLElement> | undefined ;
  portoCont: HTMLElement | undefined;

  
  ngAfterViewInit() {
    console.log("Projects ngAfterViewInit");
    this.portoCont = this.parentRef?.nativeElement;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
