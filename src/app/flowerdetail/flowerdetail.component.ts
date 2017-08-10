import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../shared/flower';

@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.scss']
})
export class FlowerdetailComponent implements OnInit {
  @Input()
  flower: Flower;

  constructor() { }

  ngOnInit() {
  }

}
