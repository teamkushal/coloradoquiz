import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2936Component } from './test-component2936.component';

describe('TestComponent2936Component', () => {
  let component: TestComponent2936Component;
  let fixture: ComponentFixture<TestComponent2936Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2936Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
