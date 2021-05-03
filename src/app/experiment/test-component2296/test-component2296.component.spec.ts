import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2296Component } from './test-component2296.component';

describe('TestComponent2296Component', () => {
  let component: TestComponent2296Component;
  let fixture: ComponentFixture<TestComponent2296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
