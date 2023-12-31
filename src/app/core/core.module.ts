import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MembersService } from './members.service';
import { EcwidLoaderService } from './ecwid-loader.service';
import { ScriptLoaderService } from './script-loader.service';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }, EcwidLoaderService, ScriptLoaderService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
