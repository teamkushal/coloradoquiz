import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1198Component } from './test-component1198.component';

describe('TestComponent1198Component', () => {
  let component: TestComponent1198Component;
  let fixture: ComponentFixture<TestComponent1198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
