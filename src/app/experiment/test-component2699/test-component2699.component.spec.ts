import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2699Component } from './test-component2699.component';

describe('TestComponent2699Component', () => {
  let component: TestComponent2699Component;
  let fixture: ComponentFixture<TestComponent2699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2699Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
