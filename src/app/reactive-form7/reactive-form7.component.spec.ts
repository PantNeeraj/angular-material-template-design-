import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm7Component } from './reactive-form7.component';

describe('ReactiveForm7Component', () => {
  let component: ReactiveForm7Component;
  let fixture: ComponentFixture<ReactiveForm7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
