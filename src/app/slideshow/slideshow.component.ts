import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ["img2.jpg"];
  currentImage = 0;
  showImage = true;
  headlines = [
    "I'm Alexander Kummerer",
    'Started to Code November 2020',
    'Bring with me, engineering on the next level',
  ];
  currentHeadline = 0;
  showHeadline = true;

  ngOnInit() {
    this.updateImage();
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
}


