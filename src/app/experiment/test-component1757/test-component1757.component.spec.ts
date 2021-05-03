import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1757Component } from './test-component1757.component';

describe('TestComponent1757Component', () => {
  let component: TestComponent1757Component;
  let fixture: ComponentFixture<TestComponent1757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1757Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
