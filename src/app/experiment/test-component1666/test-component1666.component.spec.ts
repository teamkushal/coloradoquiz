import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1666Component } from './test-component1666.component';

describe('TestComponent1666Component', () => {
  let component: TestComponent1666Component;
  let fixture: ComponentFixture<TestComponent1666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1666Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
