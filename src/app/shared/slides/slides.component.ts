import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  private currentIndex: number;

  constructor() { }

  ngOnInit() {}

  @ViewChild('slides') slides: IonSlides;

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  /**
   * @description handles active slide change
   * This method will be executed whenver the slide changes
   */
  public async handleSlideChanges($event: Event) {
    this.currentIndex = await ($event.target as any as IonSlides).getActiveIndex();
    console.log(`current index of slides is [${this.currentIndex}]`);
    console.log('while using swipe right in talkback,slide changes but this method will not be executed because ionSlideDidChange event is not emitted, which is a bug');
  }

}
