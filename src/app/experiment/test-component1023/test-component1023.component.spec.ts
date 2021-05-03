import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1023Component } from './test-component1023.component';

describe('TestComponent1023Component', () => {
  let component: TestComponent1023Component;
  let fixture: ComponentFixture<TestComponent1023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
