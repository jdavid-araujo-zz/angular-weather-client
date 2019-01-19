import { Main } from './main.mode';
import { Weather } from './weather.model';
import { Cloulds } from './clouds.model';
import { Wind } from './wind.model';
import { Sys } from './sys.model';

export class Meassure {

    public dt: Date;

    public main: Array<Main>;

    public weather: Array<Weather>;

    public clouds: Cloulds;

    public wind: Wind;

    public sys: Sys;

    public dt_txt: string;

    constructor() {
        this.main = new Array<Main>();
        this.weather = new Array<Weather>();
        this.clouds = new Cloulds();
        this.wind = new Wind();
        this.sys = new Sys();
    }
}