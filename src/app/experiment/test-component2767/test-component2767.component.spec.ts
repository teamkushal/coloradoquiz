import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2767Component } from './test-component2767.component';

describe('TestComponent2767Component', () => {
  let component: TestComponent2767Component;
  let fixture: ComponentFixture<TestComponent2767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2767Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
