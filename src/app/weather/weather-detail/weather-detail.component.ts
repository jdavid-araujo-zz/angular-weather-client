import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../model/weatherForecast.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  localization: string;
  weather: WeatherForecast;

  constructor(private weatherService: WeatherService) {
    this.weather = new WeatherForecast();
  }

  ngOnInit() {
    this.getWether();
  }

  getWether() {
    this.weatherService.getForecastByCity('Fortaleza', 'br').subscribe(
      res => {
        this.weather = res;
      console.log(this.weather);
      }
    )
  }

}
