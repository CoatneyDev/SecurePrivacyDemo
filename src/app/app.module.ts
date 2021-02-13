import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CookieBannerModule } from "./cookie-banner-module/cookie-banner-module.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CookieBannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
