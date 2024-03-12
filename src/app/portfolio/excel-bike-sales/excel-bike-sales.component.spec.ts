import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelBikeSalesComponent } from './excel-bike-sales.component';

describe('ExcelBikeSalesComponent', () => {
  let component: ExcelBikeSalesComponent;
  let fixture: ComponentFixture<ExcelBikeSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelBikeSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelBikeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
