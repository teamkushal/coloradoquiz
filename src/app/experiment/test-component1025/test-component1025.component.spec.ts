import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1025Component } from './test-component1025.component';

describe('TestComponent1025Component', () => {
  let component: TestComponent1025Component;
  let fixture: ComponentFixture<TestComponent1025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
