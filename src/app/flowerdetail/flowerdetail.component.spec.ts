import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerdetailComponent } from './flowerdetail.component';

describe('FlowerdetailComponent', () => {
  let component: FlowerdetailComponent;
  let fixture: ComponentFixture<FlowerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
