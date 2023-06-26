import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import {MatLineModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    NavigationComponent,
    FaceSnapListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }

}
