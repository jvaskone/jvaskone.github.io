import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraincadComponent } from './braincad.component';

describe('BraincadComponent', () => {
  let component: BraincadComponent;
  let fixture: ComponentFixture<BraincadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraincadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BraincadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
