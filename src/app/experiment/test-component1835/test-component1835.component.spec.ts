import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1835Component } from './test-component1835.component';

describe('TestComponent1835Component', () => {
  let component: TestComponent1835Component;
  let fixture: ComponentFixture<TestComponent1835Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1835Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
