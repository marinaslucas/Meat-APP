import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant  //Implementando a intercace. input sempre que for receber dados de outro component parentI

  constructor() { }

  ngOnInit() {
  }

}
