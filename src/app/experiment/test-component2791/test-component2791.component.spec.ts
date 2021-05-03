import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2791Component } from './test-component2791.component';

describe('TestComponent2791Component', () => {
  let component: TestComponent2791Component;
  let fixture: ComponentFixture<TestComponent2791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2791Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
