import { Component, OnInit, Inject } from '@angular/core';
import { Flower } from '../shared/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  flowers: Flower[];
  errMess: string;

  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
    this.flowerService.getFlowers()
      .subscribe(flowers =>
        this.flowers = flowers,
        err => this.errMess = err.status + ' ' + err.statusText);
  }

}
