import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritoresComponent } from './escritores.component';

describe('EscritoresComponent', () => {
  let component: EscritoresComponent;
  let fixture: ComponentFixture<EscritoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscritoresComponent]
    });
    fixture = TestBed.createComponent(EscritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
