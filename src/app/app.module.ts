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
import {HttpModule} from '@angular/http';
import { PointsComponent } from './points/points.component';
import {PointsService} from './points/points.service';
import {HttpClientModule} from '@angular/common/http';
import {StartPageService} from './start-page/start-page.service';
import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';

const routes = [
  {path: '', component: StartPageComponent},
  {path: 'main', canActivate: [AuthGuard], component: MainPageComponent},
  {path: 'points', component: PointsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule, MatSliderModule, ChartModule, InputTextModule, ButtonModule, PasswordModule, NgvasModule, AppRoutingModule,
     RouterModule.forRoot(routes), HttpClientModule , FormsModule
  ],
  providers: [PointsService, StartPageService, UserService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
