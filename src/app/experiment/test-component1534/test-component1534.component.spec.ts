import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1534Component } from './test-component1534.component';

describe('TestComponent1534Component', () => {
  let component: TestComponent1534Component;
  let fixture: ComponentFixture<TestComponent1534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1534Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
