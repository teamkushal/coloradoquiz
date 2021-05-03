import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1724Component } from './test-component1724.component';

describe('TestComponent1724Component', () => {
  let component: TestComponent1724Component;
  let fixture: ComponentFixture<TestComponent1724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1724Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
