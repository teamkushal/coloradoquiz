import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1715Component } from './test-component1715.component';

describe('TestComponent1715Component', () => {
  let component: TestComponent1715Component;
  let fixture: ComponentFixture<TestComponent1715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1715Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
