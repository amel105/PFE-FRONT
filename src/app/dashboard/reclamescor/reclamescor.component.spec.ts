import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamescorComponent } from './reclamescor.component';

describe('ReclamescorComponent', () => {
  let component: ReclamescorComponent;
  let fixture: ComponentFixture<ReclamescorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamescorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamescorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
