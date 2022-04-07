import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm3Component } from './reactive-form3.component';

describe('ReactiveForm3Component', () => {
  let component: ReactiveForm3Component;
  let fixture: ComponentFixture<ReactiveForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
