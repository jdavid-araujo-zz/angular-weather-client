import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherComponent } from './weather.component';

const recipesRoutes: Routes = [
  { path: '', component: WeatherComponent, children: [
    { path: '', component: WeatherComponent },
    { path: 'searth', component: WeatherDetailComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class WeatherRoutingModule {}
