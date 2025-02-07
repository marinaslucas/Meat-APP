import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'
 
import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()//serviço recebendo dados de um outro serviço, devo marcar com injectable
export class RestaurantsService {
       
    constructor(private http: Http) {} //o Http é uma classe do angular chamada HttpClient

    restaurants(): Observable<Restaurant[]> { // O método restaurants vai me retornar um tipo observable e dentro do observable vai o tipo de dado, que é o model Restaurant. Portanto, estou tipando o tipo de dado que será retornado. Poderia por ex. sem tipagem, aí ficaria Observable <any>
        return this.http.get(`${MEAT_API}/restaurants`) //puxa da URL
            .map(response => response.json()) //passa pra json
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)//pega da URL e me retorna em json só o o restaurante com aquela ID
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    
    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    } 

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurant/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}