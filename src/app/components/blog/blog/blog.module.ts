import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
