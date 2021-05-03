import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1987Component } from './test-component1987.component';

describe('TestComponent1987Component', () => {
  let component: TestComponent1987Component;
  let fixture: ComponentFixture<TestComponent1987Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1987Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
