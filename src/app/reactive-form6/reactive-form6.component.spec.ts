import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm6Component } from './reactive-form6.component';

describe('ReactiveForm6Component', () => {
  let component: ReactiveForm6Component;
  let fixture: ComponentFixture<ReactiveForm6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
