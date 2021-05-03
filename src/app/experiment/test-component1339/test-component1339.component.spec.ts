import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1339Component } from './test-component1339.component';

describe('TestComponent1339Component', () => {
  let component: TestComponent1339Component;
  let fixture: ComponentFixture<TestComponent1339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
