import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @ViewChild('slides') slides: IonSlides;

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
