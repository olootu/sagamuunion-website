import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() showSlideDescription?: boolean;
  @Input() slide?: any = { image: 'image' };
  slides: any[] = [
    {
      image: '../../../assets/slides/sagamu-town.png',
    },
    {
      image: '../../../assets/slides/enable-signboard.png'
    },
    {
      image: '../../../assets/slides/anniv-1.jpg'
    },
    {
      image: '../../../assets/slides/foods.png'
    },
    {
      image: '../../../assets/slides/missSag.jpg'
    },

    {
      image: '../../../assets/slides/AKARIGBO-of-Remoland.jpg'
    },
    {
      image: '../../../assets/slides/enable-2.png'
    },
    {
      image: '../../../assets/slides/ewusi.jpg'
    },
    {
      image: '../../../assets/slides/anniv-2.jpg'
    },
    {
      image: '../../../assets/slides/elepe.png'
    },
    {
      image: '../../../assets/slides/sagaday2.jpg'
    },
    {
      image: '../../../assets/slides/anniv-3.jpg'
    },
    {
      image: '../../../assets/slides/anniv-4.jpg'
    },
    {
      image: '../../../assets/slides/sourvenir.jpg'
    },
    {
      image: '../../../assets/slides/anniv-5.jpg'
    },
    {
      image: '../../../assets/slides/beach4.jpg'
    },
    {
      image: '../../../assets/slides/sut-anniv.jpg'
    }

  ];

  constructor() { }

}
