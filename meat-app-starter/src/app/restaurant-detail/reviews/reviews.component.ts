import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurant.service'
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {


  reviews: Observable<any>

  constructor(private RestaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.RestaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }
}
