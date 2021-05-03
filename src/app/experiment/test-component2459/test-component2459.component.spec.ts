import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2459Component } from './test-component2459.component';

describe('TestComponent2459Component', () => {
  let component: TestComponent2459Component;
  let fixture: ComponentFixture<TestComponent2459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2459Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
