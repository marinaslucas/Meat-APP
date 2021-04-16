import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MenuItem } from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem //sempre que eu for receber alguma coisa de um component parent eu devo marcar com input
  @Output() add = new EventEmitter() //output é quando tenho um evento

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem) //enviei o objeto menuItem quando ocorreu o evento add no click
  }
}
