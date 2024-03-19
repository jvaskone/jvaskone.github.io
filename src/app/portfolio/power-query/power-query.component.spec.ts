import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerQueryComponent } from './power-query.component';

describe('PowerQueryComponent', () => {
  let component: PowerQueryComponent;
  let fixture: ComponentFixture<PowerQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
