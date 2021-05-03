import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1449Component } from './test-component1449.component';

describe('TestComponent1449Component', () => {
  let component: TestComponent1449Component;
  let fixture: ComponentFixture<TestComponent1449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1449Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
