import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2164Component } from './test-component2164.component';

describe('TestComponent2164Component', () => {
  let component: TestComponent2164Component;
  let fixture: ComponentFixture<TestComponent2164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
