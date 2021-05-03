import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2697Component } from './test-component2697.component';

describe('TestComponent2697Component', () => {
  let component: TestComponent2697Component;
  let fixture: ComponentFixture<TestComponent2697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2697Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
