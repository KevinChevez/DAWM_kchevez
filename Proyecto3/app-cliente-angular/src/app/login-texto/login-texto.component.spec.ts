import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTextoComponent } from './login-texto.component';

describe('LoginTextoComponent', () => {
  let component: LoginTextoComponent;
  let fixture: ComponentFixture<LoginTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
