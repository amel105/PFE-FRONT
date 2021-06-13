import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMedicalComponent } from './modif-medical.component';

describe('ModifMedicalComponent', () => {
  let component: ModifMedicalComponent;
  let fixture: ComponentFixture<ModifMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
