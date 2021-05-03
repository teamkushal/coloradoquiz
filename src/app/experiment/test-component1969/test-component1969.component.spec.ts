import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1969Component } from './test-component1969.component';

describe('TestComponent1969Component', () => {
  let component: TestComponent1969Component;
  let fixture: ComponentFixture<TestComponent1969Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1969Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
