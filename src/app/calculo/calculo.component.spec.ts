import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoComponent } from './calculo.component';

describe('CalculoComponent', () => {
  let component: CalculoComponent;
  let fixture: ComponentFixture<CalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
