import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2675Component } from './test-component2675.component';

describe('TestComponent2675Component', () => {
  let component: TestComponent2675Component;
  let fixture: ComponentFixture<TestComponent2675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2675Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
