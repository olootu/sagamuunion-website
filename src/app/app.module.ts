import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SortbyPipe } from './shared/pipes/sortby.pipe';
//import { YouthMoreComponent } from './components/dialogs/youth-more/youth-more.component';


@NgModule({
  declarations: [
    AppComponent,
    // //  YouthMoreComponent
    // SortbyPipe, SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    // StoreModule.forRoot({})
    SharedModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // [SortbyPipe, SearchPipe],
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
