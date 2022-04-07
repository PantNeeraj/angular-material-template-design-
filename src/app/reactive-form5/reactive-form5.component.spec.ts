import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm5Component } from './reactive-form5.component';

describe('ReactiveForm5Component', () => {
  let component: ReactiveForm5Component;
  let fixture: ComponentFixture<ReactiveForm5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
