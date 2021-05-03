import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1965Component } from './test-component1965.component';

describe('TestComponent1965Component', () => {
  let component: TestComponent1965Component;
  let fixture: ComponentFixture<TestComponent1965Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1965Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
