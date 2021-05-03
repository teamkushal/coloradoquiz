import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2460Component } from './test-component2460.component';

describe('TestComponent2460Component', () => {
  let component: TestComponent2460Component;
  let fixture: ComponentFixture<TestComponent2460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2460Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
