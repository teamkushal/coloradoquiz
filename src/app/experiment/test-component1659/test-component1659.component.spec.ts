import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1659Component } from './test-component1659.component';

describe('TestComponent1659Component', () => {
  let component: TestComponent1659Component;
  let fixture: ComponentFixture<TestComponent1659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1659Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
