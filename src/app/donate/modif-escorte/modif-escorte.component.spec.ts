import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEscorteComponent } from './modif-escorte.component';

describe('ModifEscorteComponent', () => {
  let component: ModifEscorteComponent;
  let fixture: ComponentFixture<ModifEscorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEscorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEscorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
