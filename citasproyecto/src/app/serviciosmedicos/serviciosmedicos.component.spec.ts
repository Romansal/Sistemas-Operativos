import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmedicosComponent } from './serviciosmedicos.component';

describe('ServiciosmedicosComponent', () => {
  let component: ServiciosmedicosComponent;
  let fixture: ComponentFixture<ServiciosmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosmedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
