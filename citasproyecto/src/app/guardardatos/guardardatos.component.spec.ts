import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardardatosComponent } from './guardardatos.component';

describe('GuardardatosComponent', () => {
  let component: GuardardatosComponent;
  let fixture: ComponentFixture<GuardardatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardardatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
