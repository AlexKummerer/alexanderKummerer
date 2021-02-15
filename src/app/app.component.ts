import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  currentImage = 0;
  showImage = true;
  headlines = [
    "I'm Alexander Kummerer",
    'Started to Code November 2020',
    'Bring with me, engineering on the next level',
  ];

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 5);
    }, 5000);
  }
}
