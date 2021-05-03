import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1033Component } from './test-component1033.component';

describe('TestComponent1033Component', () => {
  let component: TestComponent1033Component;
  let fixture: ComponentFixture<TestComponent1033Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1033Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
