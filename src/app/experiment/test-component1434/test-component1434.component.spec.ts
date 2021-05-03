import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1434Component } from './test-component1434.component';

describe('TestComponent1434Component', () => {
  let component: TestComponent1434Component;
  let fixture: ComponentFixture<TestComponent1434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1434Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
