import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1257Component } from './test-component1257.component';

describe('TestComponent1257Component', () => {
  let component: TestComponent1257Component;
  let fixture: ComponentFixture<TestComponent1257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
