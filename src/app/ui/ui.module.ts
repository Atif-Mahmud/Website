import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NavigationComponent,
    LayoutComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
