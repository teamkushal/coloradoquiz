import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2912Component } from './test-component2912.component';

describe('TestComponent2912Component', () => {
  let component: TestComponent2912Component;
  let fixture: ComponentFixture<TestComponent2912Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2912Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
