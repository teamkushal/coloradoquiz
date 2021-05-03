import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2377Component } from './test-component2377.component';

describe('TestComponent2377Component', () => {
  let component: TestComponent2377Component;
  let fixture: ComponentFixture<TestComponent2377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
