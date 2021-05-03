import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1975Component } from './test-component1975.component';

describe('TestComponent1975Component', () => {
  let component: TestComponent1975Component;
  let fixture: ComponentFixture<TestComponent1975Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1975Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
