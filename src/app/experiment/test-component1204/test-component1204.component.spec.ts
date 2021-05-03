import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1204Component } from './test-component1204.component';

describe('TestComponent1204Component', () => {
  let component: TestComponent1204Component;
  let fixture: ComponentFixture<TestComponent1204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
