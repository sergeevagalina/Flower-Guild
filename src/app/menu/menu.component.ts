import { Component, OnInit } from '@angular/core';
import { Flower } from '../shared/flower';

const FLOWERS: Flower[] = [
    {
      name: 'Hibiscus',
      image: '/assets/images/hibiscus.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.'
    },
    {
      name: 'Cactus',
      image: '/assets/images/cactus.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.'
    },
    {
      name: 'Spathiphyllum',
      image: '/assets/images/spathiphyllum.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.'
    },
    {
      name: 'Succulent',
      image: '/assets/images/succulent.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.'
    }
  ];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  flowers = FLOWERS;

  selectedFlower: Flower = FLOWERS[0];


  constructor() { }

  ngOnInit() {
  }

}
