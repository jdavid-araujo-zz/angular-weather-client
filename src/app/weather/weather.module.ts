import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [
  WeatherDetailComponent,
  WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
