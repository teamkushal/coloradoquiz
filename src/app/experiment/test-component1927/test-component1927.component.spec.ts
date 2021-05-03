import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1927Component } from './test-component1927.component';

describe('TestComponent1927Component', () => {
  let component: TestComponent1927Component;
  let fixture: ComponentFixture<TestComponent1927Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1927Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
