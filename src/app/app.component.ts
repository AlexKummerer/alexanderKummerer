import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ɵɵNgOnChangesFeature,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  currentRoute = '';
  constructor(public router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // this.currenRoute = this.router.url;
    // console.log(this.router.url);
    // this.router.events.pipe(filter((event)=> event instanceof NavigationEnd))
    // .subscribe((evt: NavigationEnd)=>{
    //   console.log(event);
    // });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    
      window.scrollTo(0, 0);
    });
  }

  setOverlay(value: boolean){
    if(value)
      this.document.body.classList.add('overlay-y-hidden');
    else
      this.document.body.classList.remove('overlay-y-hidden');
  }
}
