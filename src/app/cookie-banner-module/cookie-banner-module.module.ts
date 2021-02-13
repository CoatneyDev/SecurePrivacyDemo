import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { CookieBannerComponent } from "./cookie-banner/cookie-banner.component";

@NgModule({
  declarations: [CookieBannerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgbAccordionModule,
    NgbModalModule,
    FontAwesomeModule,
  ],
  exports: [CookieBannerComponent],
})
export class CookieBannerModule {}
