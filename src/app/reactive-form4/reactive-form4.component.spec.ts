import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm4Component } from './reactive-form4.component';

describe('ReactiveForm4Component', () => {
  let component: ReactiveForm4Component;
  let fixture: ComponentFixture<ReactiveForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
