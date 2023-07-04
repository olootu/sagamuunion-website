import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { NgProgressModule } from 'ngx-progressbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
//import { MemberModule } from '../components/member/member.module';


@NgModule({
  declarations: [ToolbarComponent, LoadingComponent,
    SortbyPipe, SearchPipe, NavigationComponent, CarouselComponent],
  imports: [
    CommonModule,
    AngMaterialModule,
    NgProgressModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

    // MemberModule
  ],
  exports: [
    AngMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToolbarComponent,
    LoadingComponent,
    NgProgressModule,
    SortbyPipe,
    SearchPipe,
    NavigationComponent,
    CarouselComponent
  ],
  providers: [[SortbyPipe, SearchPipe],],

})
export class SharedModule { }
