import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1770Component } from './test-component1770.component';

describe('TestComponent1770Component', () => {
  let component: TestComponent1770Component;
  let fixture: ComponentFixture<TestComponent1770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1770Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
