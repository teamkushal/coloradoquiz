import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1656Component } from './test-component1656.component';

describe('TestComponent1656Component', () => {
  let component: TestComponent1656Component;
  let fixture: ComponentFixture<TestComponent1656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1656Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
