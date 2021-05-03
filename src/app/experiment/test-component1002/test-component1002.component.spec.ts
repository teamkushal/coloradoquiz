import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1002Component } from './test-component1002.component';

describe('TestComponent1002Component', () => {
  let component: TestComponent1002Component;
  let fixture: ComponentFixture<TestComponent1002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
