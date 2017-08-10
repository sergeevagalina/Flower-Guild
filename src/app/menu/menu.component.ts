import { Component, OnInit } from '@angular/core';
import { Flower } from '../shared/flower';
import { FLOWERS } from '../shared/flowers';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  flowers: Flower[] = FLOWERS;

  selectedFlower: Flower;


  constructor() { }

  ngOnInit() {
  }

  onSelect(flower: Flower) {
    this.selectedFlower = flower;
  }

}
