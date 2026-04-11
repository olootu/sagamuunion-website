import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() showSlideDescription?: boolean = false;
  @Input() slide?: any = { image: 'image' };
  @Input() slides?: any[] = [];

  constructor() { }

}
