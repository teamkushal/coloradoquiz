import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1937Component } from './test-component1937.component';

describe('TestComponent1937Component', () => {
  let component: TestComponent1937Component;
  let fixture: ComponentFixture<TestComponent1937Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1937Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
