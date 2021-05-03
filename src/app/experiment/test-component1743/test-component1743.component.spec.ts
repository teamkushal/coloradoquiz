import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1743Component } from './test-component1743.component';

describe('TestComponent1743Component', () => {
  let component: TestComponent1743Component;
  let fixture: ComponentFixture<TestComponent1743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1743Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
