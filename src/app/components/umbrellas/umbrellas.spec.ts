import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Umbrellas } from './umbrellas';

describe('Umbrellas', () => {
  let component: Umbrellas;
  let fixture: ComponentFixture<Umbrellas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Umbrellas],
    }).compileComponents();

    fixture = TestBed.createComponent(Umbrellas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
