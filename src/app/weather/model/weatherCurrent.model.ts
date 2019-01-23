import { Coord } from './coord.model';
import { Weather } from './weather.model';
import { Main } from './main.model';
import { Cloulds } from './clouds.model';
import { Sys } from './sys.model';

export class WeatherCurrent {
    public coord: Coord;

    public weather: Array<Weather>;

    public base: string;

    public main: Main;

    public clouds: Cloulds;

    public dt: number;

    public sys: Sys;

    public id: number;

    public city: string;

    public cod: number;

    public name: string;

    constructor() {
      this.coord = new Coord();
      this.weather = new Array<Weather>();
      this.main = new Main();
      this.clouds = new Cloulds();
      this.sys = new Sys();
    }
}
