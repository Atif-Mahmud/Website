import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, LayoutComponent]
})
export class UiModule { }
