import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1232Component } from './test-component1232.component';

describe('TestComponent1232Component', () => {
  let component: TestComponent1232Component;
  let fixture: ComponentFixture<TestComponent1232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
