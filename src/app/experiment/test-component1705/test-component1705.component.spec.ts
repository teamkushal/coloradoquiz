import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1705Component } from './test-component1705.component';

describe('TestComponent1705Component', () => {
  let component: TestComponent1705Component;
  let fixture: ComponentFixture<TestComponent1705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1705Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
