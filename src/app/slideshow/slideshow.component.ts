import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {


  images = ['img2.jpg'];
  currentImage = 0;
  showImage = true;
  headlines = [
    "I'm Alexander Kummerer",
    'German Front-End Developer',
    'Started to Code November 2020',
    'Turn your ideas into reality',
  ];
  currentHeadline = 0;
  showHeadline = true;
  downward = ['arrow_downward'];
  currentarrow = 0;
  showArrow = true;


  ngOnInit() {
    this.updateImage();
    this.updateHeadline();
    this.updateArrow();
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

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 3);
    }, 5000);
  }
  updateArrow() {
    setInterval(() => {
      this.currentarrow++;
      this.currentarrow = this.currentarrow % this.downward.length;
      this.showArrow = false;
      setTimeout(() => {
        this.showArrow = true;
      }, 3);
    }, 5000);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
