import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1286Component } from './test-component1286.component';

describe('TestComponent1286Component', () => {
  let component: TestComponent1286Component;
  let fixture: ComponentFixture<TestComponent1286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
