import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclammedicalComponent } from './reclammedical.component';

describe('ReclammedicalComponent', () => {
  let component: ReclammedicalComponent;
  let fixture: ComponentFixture<ReclammedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclammedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclammedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
