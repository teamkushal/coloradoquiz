import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1287Component } from './test-component1287.component';

describe('TestComponent1287Component', () => {
  let component: TestComponent1287Component;
  let fixture: ComponentFixture<TestComponent1287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
