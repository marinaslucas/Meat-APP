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

  // uma vez que foi no serviço e executou a funcao restaurantes do serviço, precisa do subscribe pra salvar o retorno dentro da variavel cu
  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe((retornorestaurante) => {this.restaurants = retornorestaurante; 
  
      console.log(this.restaurants);
      });
        //Como o serviço é do tipo observable, dou o subscribe para inscrever no observable e esperar três tipos de retorno: por padrão, um data que é o retorno do get, erro e todos. Vai receber o primeiro restaurants ali (poderia chamar de qualquer coisa), e vai preencher o this. restaurants que é o restaurants dessa classe com esse primeiro restaurants que ta recebendo. Portanto seria assim recebi o dado => this.restaurants=o dado que recebi
  }

}
 
