import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1005Component } from './test-component1005.component';

describe('TestComponent1005Component', () => {
  let component: TestComponent1005Component;
  let fixture: ComponentFixture<TestComponent1005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
