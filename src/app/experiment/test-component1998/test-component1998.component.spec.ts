import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1998Component } from './test-component1998.component';

describe('TestComponent1998Component', () => {
  let component: TestComponent1998Component;
  let fixture: ComponentFixture<TestComponent1998Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1998Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
