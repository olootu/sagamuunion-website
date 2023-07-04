import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { EcwidLoaderService } from '../../../core/ecwid-loader.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements AfterViewInit, OnDestroy {

  @ViewChild('productBrowse') productBrowseEl: ElementRef;

  @Input() siteId: string;

  constructor(private ecwidLoader: EcwidLoaderService) { }

  ngAfterViewInit() {
    this.ecwidLoader.init(this.productBrowseEl);
  }

  ngOnDestroy() {
    this.ecwidLoader.destroy();
  }

}
