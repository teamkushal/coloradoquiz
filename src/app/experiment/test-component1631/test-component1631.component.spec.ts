import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1631Component } from './test-component1631.component';

describe('TestComponent1631Component', () => {
  let component: TestComponent1631Component;
  let fixture: ComponentFixture<TestComponent1631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1631Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
