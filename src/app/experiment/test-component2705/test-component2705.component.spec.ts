import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2705Component } from './test-component2705.component';

describe('TestComponent2705Component', () => {
  let component: TestComponent2705Component;
  let fixture: ComponentFixture<TestComponent2705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2705Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
