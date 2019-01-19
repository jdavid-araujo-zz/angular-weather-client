import { Coord } from './coord';
import { Weather } from './weather';
import { Main } from './main';
import { Cloulds } from './clouds';
import { Sys } from './sys';

export class WeatherCurrent {
    public coord: Coord;

    public weather: Weather;

    public base: string;

    public main: Main;

    public clouds: Cloulds;

    public dt: number;

    public sys: Sys;

    public id: number;

    public city: string;

    public cod: number;
}