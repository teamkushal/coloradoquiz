import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1056Component } from './test-component1056.component';

describe('TestComponent1056Component', () => {
  let component: TestComponent1056Component;
  let fixture: ComponentFixture<TestComponent1056Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1056Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
