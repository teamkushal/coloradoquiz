import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1634Component } from './test-component1634.component';

describe('TestComponent1634Component', () => {
  let component: TestComponent1634Component;
  let fixture: ComponentFixture<TestComponent1634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1634Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
