import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesViewComponent } from './ordenes-view.component';

describe('OrdenesViewComponent', () => {
  let component: OrdenesViewComponent;
  let fixture: ComponentFixture<OrdenesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
