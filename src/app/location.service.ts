import { Injectable } from '@angular/core';
import * as countriesWithCities from 'countries-with-cities-select'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  countriesWithCities = require('countries-with-cities-select');
  test = countriesWithCities.getCountries();
}
