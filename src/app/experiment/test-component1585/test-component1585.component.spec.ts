import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1585Component } from './test-component1585.component';

describe('TestComponent1585Component', () => {
  let component: TestComponent1585Component;
  let fixture: ComponentFixture<TestComponent1585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1585Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
