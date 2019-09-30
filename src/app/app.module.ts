import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HenkilotComponent } from './henkilot/henkilot.component';
import { PaivaComponent } from './kello/paiva.component';
import { KelloComponent } from './kello/kello.component';

@NgModule({
  declarations: [
    AppComponent,
    HenkilotComponent,
    PaivaComponent,
    KelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
