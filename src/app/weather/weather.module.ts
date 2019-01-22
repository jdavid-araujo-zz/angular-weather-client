import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpUtilService } from '../shared/http-util.service';

@NgModule({
  declarations: [
  WeatherDetailComponent,
  WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ],
  providers: [HttpUtilService]

})
export class WeatherModule { }
