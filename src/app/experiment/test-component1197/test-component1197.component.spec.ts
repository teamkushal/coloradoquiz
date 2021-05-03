import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1197Component } from './test-component1197.component';

describe('TestComponent1197Component', () => {
  let component: TestComponent1197Component;
  let fixture: ComponentFixture<TestComponent1197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
