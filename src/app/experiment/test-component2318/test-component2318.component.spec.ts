import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2318Component } from './test-component2318.component';

describe('TestComponent2318Component', () => {
  let component: TestComponent2318Component;
  let fixture: ComponentFixture<TestComponent2318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
