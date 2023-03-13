import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getData(){
    return [
      {name:'Bike',price:20000},
      {name:'car',price:100000},
      {name:'Auto',price:30000},
      {name:'Bus',price:200000}
    ]
  }
}
