import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1575Component } from './test-component1575.component';

describe('TestComponent1575Component', () => {
  let component: TestComponent1575Component;
  let fixture: ComponentFixture<TestComponent1575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1575Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
