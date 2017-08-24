import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../shared/flower';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.scss']
})
export class FlowerdetailComponent implements OnInit {

  flower: Flower;

  constructor(private flowerservice: FlowerService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.flowerservice.getFlower(id).then(flower => this.flower = flower);
  }

}
