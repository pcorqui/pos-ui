import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponentComponent } from './stock-item-component.component';

describe('StockItemComponentComponent', () => {
  let component: StockItemComponentComponent;
  let fixture: ComponentFixture<StockItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
