import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamsangComponent } from './reclamsang.component';

describe('ReclamsangComponent', () => {
  let component: ReclamsangComponent;
  let fixture: ComponentFixture<ReclamsangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamsangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamsangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
