import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
=======
>>>>>>> Move NgbModule to UiModule
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    NgbModule,
    AppRoutingModule,
=======
>>>>>>> Move NgbModule to UiModule
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
