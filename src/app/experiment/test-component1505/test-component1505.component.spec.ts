import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1505Component } from './test-component1505.component';

describe('TestComponent1505Component', () => {
  let component: TestComponent1505Component;
  let fixture: ComponentFixture<TestComponent1505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
