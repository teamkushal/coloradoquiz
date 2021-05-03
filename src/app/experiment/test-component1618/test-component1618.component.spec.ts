import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1618Component } from './test-component1618.component';

describe('TestComponent1618Component', () => {
  let component: TestComponent1618Component;
  let fixture: ComponentFixture<TestComponent1618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1618Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
