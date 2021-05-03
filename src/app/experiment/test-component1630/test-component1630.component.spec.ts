import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1630Component } from './test-component1630.component';

describe('TestComponent1630Component', () => {
  let component: TestComponent1630Component;
  let fixture: ComponentFixture<TestComponent1630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1630Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
