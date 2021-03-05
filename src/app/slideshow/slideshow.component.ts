import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {



  
  headlines = [
    "I'm Alexander Kummerer",
    'German Speaking Front-End Developer',
    'Started to Code November 2020',
    'Turn your ideas into reality',
  ];
  currentHeadline = 0;
  showHeadline = true;
  downward = ['arrow_downward'];
  currentarrow = 0;
  showArrow = true;
  @Input() portfolio: any;
  @Output() showPortfolio = new EventEmitter();

  constructor() {}

  ngOnInit() {

    this.updateHeadline();
   
  }
  updateHeadline() {
    setInterval(() => {
      this.currentHeadline++;
      this.currentHeadline = this.currentHeadline % this.headlines.length;
      this.showHeadline = false;

      setTimeout(() => {
        this.showHeadline = true;
      }, 3);
    }, 5000);
  }
/*
  updateArrow() {
    setInterval(() => {
      this.currentarrow++;
      this.currentarrow = this.currentarrow % this.downward.length;
      this.showArrow = false;
      setTimeout(() => {
        this.showArrow = true;
      }, 3);
    }, 5000);
  };
*/

  scrollPortfolio() {
    console.log(this.showPortfolio);
    this.showPortfolio.emit(null);
  }
}
