import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1688Component } from './test-component1688.component';

describe('TestComponent1688Component', () => {
  let component: TestComponent1688Component;
  let fixture: ComponentFixture<TestComponent1688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1688Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
