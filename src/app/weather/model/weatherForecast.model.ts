import { Coord } from './coord.model';
import { City } from './city.model';
import { Meassure } from './meassure.model';
import { Weather } from './weather.model';
import { Cloulds } from './clouds.model';
import { Wind } from './wind.model';

export class WeatherForecast {

    public city: City;

    public cnt: number;

    public cod: string;

    public list: Array<Meassure>;

    constructor() {
        this.city = new City();
        this.list = new Array<Meassure>();
    }
}
