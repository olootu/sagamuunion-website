import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCarousel, MatCarouselComponent } from '@thouet/material-carousel';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy {
  private authListenerSubs: Subscription;
  memberIsAuthenticated: boolean;
  showNav: boolean = false;
  isMobilePhone: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobilePhone = true;
      }
    });
  }

  onShowNav() {
    this.showNav = !this.showNav;
  }
  toggleMobileNav() {
    this.showNav = !this.showNav;
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
