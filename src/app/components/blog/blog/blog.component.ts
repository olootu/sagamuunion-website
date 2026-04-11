import { Component, OnInit } from '@angular/core';
import { Wordpress } from '../../../models/wordpress.model';
import { BlogService } from '../blog.service';
import { PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  content: Wordpress[] = [];
  isMobilePhone = false;
  isMobileLandscape = false;
  selected = 'DESC';
  length = 0;
  currentPage = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  isLoading = false;

  pageEvent: PageEvent;

  constructor(private http: BlogService, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobilePhone = true;
        this.isMobileLandscape = false;
      }
    });

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobileLandscape = true;
        this.isMobilePhone = false;
      }
    });
  }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(): void {
    this.isLoading = true;
    this.http.getWpApi(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.content = response.body || [];
        this.length = Number(response.headers.get('X-WP-Total')) || 0;
        this.isLoading = false;
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.loadPage();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
