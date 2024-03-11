import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiebookComponent } from './cookiebook.component';

describe('CookiebookComponent', () => {
  let component: CookiebookComponent;
  let fixture: ComponentFixture<CookiebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
