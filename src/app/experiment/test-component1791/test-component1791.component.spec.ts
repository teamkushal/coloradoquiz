import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1791Component } from './test-component1791.component';

describe('TestComponent1791Component', () => {
  let component: TestComponent1791Component;
  let fixture: ComponentFixture<TestComponent1791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1791Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
