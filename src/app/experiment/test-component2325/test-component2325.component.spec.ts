import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2325Component } from './test-component2325.component';

describe('TestComponent2325Component', () => {
  let component: TestComponent2325Component;
  let fixture: ComponentFixture<TestComponent2325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
