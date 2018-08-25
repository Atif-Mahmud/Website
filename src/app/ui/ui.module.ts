import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
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
