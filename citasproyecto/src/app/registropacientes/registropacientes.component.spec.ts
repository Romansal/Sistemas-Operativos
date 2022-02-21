import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropacientesComponent } from './registropacientes.component';

describe('RegistropacientesComponent', () => {
  let component: RegistropacientesComponent;
  let fixture: ComponentFixture<RegistropacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistropacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
