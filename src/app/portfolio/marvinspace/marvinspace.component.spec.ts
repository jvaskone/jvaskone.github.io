import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvinspaceComponent } from './marvinspace.component';

describe('MarvinspaceComponent', () => {
  let component: MarvinspaceComponent;
  let fixture: ComponentFixture<MarvinspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvinspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarvinspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
