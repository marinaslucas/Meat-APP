import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MONEY'},
    {label: 'Cartão de Débito', value:'DEBITO'},
    {label: 'Cartão de Refeição', value:'TICKET'},

  ]



  constructor() { }

  ngOnInit() {
  }

}
