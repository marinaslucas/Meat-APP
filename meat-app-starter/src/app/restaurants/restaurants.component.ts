import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }
  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe((retornorestaurante) => {this.restaurants = retornorestaurante; 
  
      console.log(this.restaurants);
      });

  }

}
 
