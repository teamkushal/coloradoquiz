import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1195Component } from './test-component1195.component';

describe('TestComponent1195Component', () => {
  let component: TestComponent1195Component;
  let fixture: ComponentFixture<TestComponent1195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
