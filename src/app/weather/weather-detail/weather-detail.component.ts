import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherForecast } from '../model/weatherForecast.model';
import { WeatherCurrent } from '../model/weatherCurrent.model';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  localization: string;
  weather: WeatherCurrent;
  weatherForecast: WeatherForecast;


  constructor(private weatherService: WeatherService) {
    this.weather = new WeatherCurrent();
    this.weatherForecast = new WeatherForecast();
  }

  ngOnInit() {
    this.getWeather();
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.weatherService.getForecastByCity('Fortaleza', 'br').subscribe(
      res => {
        this.weatherForecast = res;
        console.log(res);
      }
    );
  }

  getWeather() {
    this.weatherService.getCurrentByCity('Fortaleza', 'br').subscribe(
      res => {
        this.weather = res;
        console.log(res);
      }
    );
  }
}
