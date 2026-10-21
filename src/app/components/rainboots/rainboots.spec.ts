import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainBoots } from './rainboots';

describe('RainBoots', () => {
  let component: RainBoots;
  let fixture: ComponentFixture<RainBoots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainBoots],
    }).compileComponents();

    fixture = TestBed.createComponent(RainBoots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
