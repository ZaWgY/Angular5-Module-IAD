import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {ChartModule, InputTextModule, ButtonModule, PasswordModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import 'hammerjs';
import { NgvasModule, tweens, hitAreas } from 'ngvas';
import { AppRoutingModule } from './/app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: StartPageComponent},
  {path: 'main', component: MainPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule, MatSliderModule, ChartModule, InputTextModule, ButtonModule, PasswordModule, NgvasModule, AppRoutingModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
