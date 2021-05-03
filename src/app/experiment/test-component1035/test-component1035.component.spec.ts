import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1035Component } from './test-component1035.component';

describe('TestComponent1035Component', () => {
  let component: TestComponent1035Component;
  let fixture: ComponentFixture<TestComponent1035Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1035Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
