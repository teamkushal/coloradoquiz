import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1235Component } from './test-component1235.component';

describe('TestComponent1235Component', () => {
  let component: TestComponent1235Component;
  let fixture: ComponentFixture<TestComponent1235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
