import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarjetaCreditoComponent } from './lista-tarjeta-credito.component';

describe('ListaTarjetaCreditoComponent', () => {
  let component: ListaTarjetaCreditoComponent;
  let fixture: ComponentFixture<ListaTarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarjetaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
