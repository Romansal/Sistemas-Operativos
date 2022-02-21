import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresiondatosComponent } from './impresiondatos.component';

describe('ImpresiondatosComponent', () => {
  let component: ImpresiondatosComponent;
  let fixture: ComponentFixture<ImpresiondatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresiondatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresiondatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
