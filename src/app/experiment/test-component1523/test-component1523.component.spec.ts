import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1523Component } from './test-component1523.component';

describe('TestComponent1523Component', () => {
  let component: TestComponent1523Component;
  let fixture: ComponentFixture<TestComponent1523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1523Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
