import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelWorldPopulationComponent } from './excel-world-population.component';

describe('ExcelWorldPopulationComponent', () => {
  let component: ExcelWorldPopulationComponent;
  let fixture: ComponentFixture<ExcelWorldPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelWorldPopulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelWorldPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
